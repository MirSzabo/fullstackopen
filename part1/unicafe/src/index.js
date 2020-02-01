import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick = {() => setGood(prevCount => prevCount +1)}>good</button>
        <button onClick = {() => setNeutral(prevCount => prevCount +1)}>neutral</button>
        <button onClick = {() => setBad(prevCount => prevCount +1)}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
