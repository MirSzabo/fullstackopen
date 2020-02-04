import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  console.log(parts);

  return parts.map(({ id, name, exercises }) => (
    <p key={id}>
      {name} {exercises}
    </p>
  ));
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>total of {total} exercises</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
