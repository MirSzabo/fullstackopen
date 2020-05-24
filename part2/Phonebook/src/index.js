import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const Phonebook = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Phonebook />, document.getElementById("root"));
