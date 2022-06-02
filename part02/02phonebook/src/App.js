import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import Notification from './components/Notification';

import personService from './components/Communications'

import './index.css'

const generateRandomID = () =>{
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

const formIDs = [generateRandomID(), generateRandomID()];

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('...')
  const [newNumber, setNewNumber] = useState('...');
  const [newTerm, setNewSearch] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState('error!!');

  
  const effectHook = () =>{
    personService.getAll()
      .then(phoneBook => setPersons(phoneBook))
      .catch((error) => {
        console.log(error.response.data.error)
        notify(error.response.data.error)
      })
  }
  useEffect(effectHook, [])

  const notify = (message) =>{
    setNotifMessage(message);
    setShowNotif(true);
    setTimeout(()=>{
        setShowNotif(false)
    }, 5000  
    )
  }

  const handleTermChange = (event) => {
    setNewSearch(event.target.value);
  }

  const handleDelete = (id) => {
    const name = persons.find(person => person.id===id).name;
    //if(window.confirm(`Would you like to delete ${name}'s number?`)){
    personService
      .deleteRecord(id)
      .then(() => {
        notify(`Deleted ${name}`)
        effectHook()
      })
      .catch((error) =>{
        console.log(error.response.data.error)
        notify(error.response.data.error)
      });
    //}
  }

  const handleUpdate = (name, number) => {
    const curr_person = persons.find(person => person.name===name);
    //if(window.confirm(`Current number for ${name} is ${persons.find(person => person.name===name).number}. Would you like to update ${name}'s number to ${number}`))
    personService
      .updateRecord(curr_person.id, {name: name, number: number})
      .then(() => {
        notify(`Updated record for ${name}`)
        effectHook()
      })
      .catch((error) =>{
        console.log(error.response.data.error)
        notify(error.response.data.error)
      });
  }

  const addName = (event) => {
    event.preventDefault();
    if(persons.some(rec => rec.name === newName)){
      handleUpdate(newName, newNumber);
    }else{       
      const newRecord = {name: newName, number: newNumber};
      personService
        .addRecord(newRecord)
        .then(newPerson => {
          notify(`Added ${newName} with number ${newNumber}.`)
          setPersons(persons.concat(newPerson))
        })
        .catch((error) =>{
          console.log(error.response.data.error)
          notify(error.response.data.error)
        })
    }
    console.log("form submitted", persons)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      {showNotif && <Notification message={notifMessage}/>}
      <Filter entry={newTerm} entryFunc={handleTermChange}/>

      <h2>Add a new record</h2>
      <PersonForm 
        submitFunc={addName} 
        submitText={"add"}
        inputs={[
          {
            label: "name",
            entry: newName,
            entryFunc: setNewName,
            id: formIDs[0]
          },
          {
            label: "number",
            entry: newNumber,
            entryFunc: setNewNumber,
            id: formIDs[1]
          }
        ]}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        deleteFunc={handleDelete}
        filterName={newTerm}
      />
    </div>
  )
}

export default App;