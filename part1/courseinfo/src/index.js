import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  console.log(parts);

  return parts.map(({ name, exercises }) => (
    <p>
      {name} {exercises}
    </p>
  ));
};

const Total = ({ parts }) => {
  console.log(parts);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <p>
      Number of exercises{" "}
      {[
        parts[0].exercises,
        parts[1].exercises,
        parts[2].exercises
      ].reduce(reducer)}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
