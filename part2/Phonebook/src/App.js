import React, { useState, createContext } from "react";
import Person from "./components/Person";
import SearchField from "./components/SearchField";
import PersonForm from "./components/PersonForm";

export const userListContext = createContext();

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("");

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    /*if (input !== "") {
      setPersons(persons.concat(personObject));
    } */

    if (persons.find(element => element === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const rows = () =>
    persons.map(person => <Person key={person.id} person={person} />);

  return (
    <div>
      <h2>Phonebook</h2>
      <userListContext.Provider
        className="user-container"
        value={{
          input,
          setInput,
          newName,
          newNumber,
          addPerson,
          setNewNumber,
          setNewName
        }}
      >
        <SearchField />
        <PersonForm />
      </userListContext.Provider>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
