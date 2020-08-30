import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const Phonebook = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Phonebook />, document.getElementById("root"));
