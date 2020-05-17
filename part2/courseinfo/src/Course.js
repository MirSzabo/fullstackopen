import React from "react";

const Course = ({ courses }) => {
  return (
    <div>
      <Header />
      <Content courses={courses} />
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
    </div>
  );
};

const Content = ({ courses }) => {
  return courses.map((course) => (
    <div key={course.id}>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <h3>
        total of{" "}
        {course.parts.reduce((acc, part) => {
          return acc + part.exercises;
        }, 0)}{" "}
        exercises
      </h3>
    </div>
  ));
};

export default Course;
