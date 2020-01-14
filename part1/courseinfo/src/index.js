import React from "react";
import ReactDOM from "react-dom";

const Part = props => {
  console.log(props);
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Header = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = props => {
  console.log(props);
  return (
    <div>
      <Part name={props.name} exercises={props.exercises} />
      <Part name={props.name} exercises={props.exercises} />
      <Part name={props.name} exercises={props.exercises} />
    </div>
  );
};

const Total = props => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
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
  /*const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }*/

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      />
      <Total
        exercises={parts.forEach(exercise => {
          const item = exercise.exercises;
          console.log(item);

        })}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
