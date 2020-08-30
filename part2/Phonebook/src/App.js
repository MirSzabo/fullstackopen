import React, { useState, useEffect, createContext } from "react";
import Person from "./components/Person";
import SearchField from "./components/SearchField";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

export const userListContext = createContext();

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("");
  const [showAll, setShowAll] = useState(true);

  const namesToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(input.toLowerCase())
      );

  useEffect(() => {
    personService.getAll().then((initPerson) => {
      setPersons(initPerson);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find((element) => element.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const rows = () =>
    namesToShow.map((person) => (
      <Person key={person.name} person={person} onRemove={removePerson} />
    ));

  const handleSearch = (e) => {
    e.target.value.length ? setShowAll(false) : setShowAll(true);
    setInput(e.target.value);
  };

  const removePerson = (id, name) => () => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

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
          setNewName,
          handleSearch,
        }}
      >
        <SearchField input={input} handleSearch={handleSearch} />
        <PersonForm />
      </userListContext.Provider>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
