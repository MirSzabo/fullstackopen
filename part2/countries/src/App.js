import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

 // const filtered = countries.filter((country) => country.name.includes(query));

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries((country) => country.concat(response.data));
    });
  }, []);

  return (
    <div>
      <h2>find countries</h2>    
    </div>
  );
};

export default App;
