import React from "react";

const Countries = ({ countries, handleClick }) => (
  <ul>
    {countries.map(({ name }) => (
      <li key={name}>
        {name}
        <button id={name} onClick={handleClick}>
          Show
        </button>
      </li>
    ))}
  </ul>
);

export default Countries;
