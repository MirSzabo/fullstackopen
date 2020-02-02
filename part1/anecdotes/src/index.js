import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ setGood, setNeutral, setBad }) => {
  return (
    <div>
      <button onClick={() => setGood(prevCount => prevCount + 1)}>good</button>
      <button onClick={() => setNeutral(prevCount => prevCount + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(prevCount => prevCount + 1)}>bad</button>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}: {value}
      </p>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + bad * -1) / all || 0;
  const positive = (good / all) * 100 || 0;

  if (all > 0) {
    return (
      <div>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </div>
    );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
