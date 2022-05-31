import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import Notification from './components/Notification';

import commService from './components/Communications'

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
    commService.getAll()
      .then(phoneBook => setPersons(phoneBook))
      .catch(() => {
        notify(`Could not get data from server.`)
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
    commService
      .deleteRecord(id)
      .then(() => {
        notify(`Deleted ${name}`)
        effectHook()
      })
      .catch(() =>{
        notify(`Error: could not delete ${newName} from server.`)
      });
    //}
  }

  const handleUpdate = (name, number) => {
    const curr_person = persons.find(person => person.name===name);
    //if(window.confirm(`Current number for ${name} is ${persons.find(person => person.name===name).number}. Would you like to update ${name}'s number to ${number}`))
    commService
      .updateRecord(curr_person.id, {name: name, number: number})
      .then(() => {
        notify(`Updated record for ${name}`)
        effectHook()
      })
      .catch(() =>{
        notify(`Error: could not update ${name} to number ${number}.`)
      });
  }

  const addName = (event) => {
    event.preventDefault();
    if(persons.some(rec => rec.name === newName)){
      handleUpdate(newName, newNumber);
    }else{       
      const newRecord = {name: newName, number: newNumber};
      commService
        .addRecord(newRecord)
        .then(newPerson => {
          notify(`Added ${newName} with number ${newNumber}.`)
          setPersons(persons.concat(newPerson))
        })
        .catch(() =>{
          notify(`Error: could not add ${newName} with number ${newNumber}.`)
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