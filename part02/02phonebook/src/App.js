import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const server_url = 'http://localhost:3001';

const generateRandomID = () =>{
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

const formIDs = [generateRandomID(), generateRandomID()];

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('...')
  const [newNumber, setNewNumber] = useState('...');
  const [newTerm, setNewSearch] = useState('');
  
  const effectHook = () =>{
    axios
      .get(`${server_url}/persons`)
      .then((resp) => {
        console.log("promise fulfilled")
        setPersons(resp.data);
      })
  }
  useEffect(effectHook, [])


  const handleTermChange = (event) => {
    setNewSearch(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();
    if(persons.some(rec => rec.name === newName)){
      window.alert(`${newName} already in phonebook`)
    }else{
      const persons_temp = [...persons, {name: newName, number: newNumber, id:generateRandomID()}];
      setPersons(persons_temp);
    }
    console.log("form submitted", persons)
  }

  return (
    <div>
      <h1>Phonebook</h1>
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
      <Persons persons={persons} filterName={newTerm}/>
    </div>
  )
}

export default App;