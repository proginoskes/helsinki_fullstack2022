import { useState } from 'react'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const generateRandomID = () =>{
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: generateRandomID() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: generateRandomID() },
    { name: 'Dan Abramov', number: '12-43-234345', id: generateRandomID() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: generateRandomID() }  
  ]) 
  const [newName, setNewName] = useState('...')
  const [newNumber, setNewNumber] = useState('...');
  const [newTerm, setNewSearch] = useState('');

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
            id: 1
          },
          {
            label: "number",
            entry: newNumber,
            entryFunc: setNewNumber,
            id: 2
          }
        ]}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={newTerm}/>
    </div>
  )
}

export default App;