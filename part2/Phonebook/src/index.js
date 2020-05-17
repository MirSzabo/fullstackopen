import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Phonebook = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Phonebook />, document.getElementById("root"));
