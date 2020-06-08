import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import Country from "./Country";

const ShowCountries = ({ countriesInitial }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesInitial);
  }, [countriesInitial]);

  const singleMatch = countries.length === 1;
  const manyMatches = countries.length > 10;
  const noMatch = countries.length === 0;

  const handleCLick = (event) =>
    setCountries([
      countries.find((country) => country.name === event.target.id),
    ]);

  return (
    <div>
      {noMatch ? (
      ''
      ) : manyMatches ? (
        <p>Too many matches, specify another filter</p>
      ) : singleMatch ? (
        <Country country={countries[0]} />
      ): (
        <Countries countries={countries} handleClick={handleCLick} />
      )}
    </div>
  );
};

export default ShowCountries;
