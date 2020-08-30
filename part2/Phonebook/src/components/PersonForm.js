import React, { useContext } from "react";
import { userListContext } from "../App";

const PersonForm = () => {
  const {
    newName,
    newNumber,
    addPerson,
    setNewNumber,
    setNewName,
  } = useContext(userListContext);
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>add a new</h2>
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
    </div>
  );
};

export default PersonForm;
