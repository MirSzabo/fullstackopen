import React, { useState, createContext } from "react";
import Person from "./components/Person";
import SearchField from "./components/SearchField";

export const userListContext = createContext();

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("");

  const addPerson = event => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };


    /*if (input !== "") {
      setPersons(persons.concat(personObject));
    } */
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const rows = () =>
    persons.map(person => <Person key={person.id} person={person} />);

  const handlePersonChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <userListContext.Provider
          className="user-container"
          value={{
            input,
            setInput
          }}
        >
      <SearchField />
      </userListContext.Provider>
      <form onSubmit={addPerson}>
        <div>
          name is: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
