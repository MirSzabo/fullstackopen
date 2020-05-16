import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const parts = course.parts;

  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    );
  };

  const Content = ({ parts }) => {
    return (
      <ul>
        {parts.map((part) => (
          <li key={part.name}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    );
  };

  const Total = ({ parts }) => {
    return (
      <div>
        <h3>
          total of{" "}
          {parts.reduce((acc, part) => {
            return acc + part.exercises;
          }, 0)}{" "}
          exercises
        </h3>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
