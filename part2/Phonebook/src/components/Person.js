import React from "react";

const Person = ({ person, onRemove }) => {
  return (
    <li>
      {person.name} {person.number}
      <button id={person.id} onClick={onRemove(person.id, person.name)}>delete</button>
    </li>
  );
};

export default Person;
