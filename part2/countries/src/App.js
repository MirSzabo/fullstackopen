import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import ShowCountries from "./components/ShowCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filterHandle = (event) => setFilter(event.target.value);

  const countriesInitial = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Filter value={filter} filterHandle={filterHandle} />
      {countriesInitial.length > 0 && <ShowCountries countriesInitial={countriesInitial} />}
    </div>
  );
};

export default App;
