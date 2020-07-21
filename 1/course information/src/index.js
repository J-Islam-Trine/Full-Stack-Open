import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  
  let part1 = props.parts[0];
  let part2 = props.parts[1];
  let part3 = props.parts[2];
  // console.log(part1, part2, part3);
  return (
    <>
      <Part part = {part1.name} exercises = {part1.exercises}/>
      <Part part = {part2.name} exercises = {part2.exercises}/>
      <Part part = {part3.name} exercises = {part3.exercises}/>
    </>
  )
}

const Total = (props) => {
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14,
  },
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content  parts= {course.parts}  />
      <Total parts= {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))