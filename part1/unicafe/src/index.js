import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + bad * -1) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <div>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood(prevCount => prevCount + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(prevCount => prevCount + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(prevCount => prevCount + 1)}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
