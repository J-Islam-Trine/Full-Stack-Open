import React from 'react';

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Part = ({name, number}) => {
    return (
      <>
        <p>
          {name} {number}
        </p>
      </>
    )
  }
  
  const Content = (props) => {
    // console.log(props);
    const parts = [...props.parts];
    
    return (
      <>
      {parts.map((part,i) => <Part key={i} name={part.name} number={part.exercises} />)}
      </>
    )
  }
  
  const Total = (props) => {
    const parts = [...props.parts];
    const total = (parts.map(part => part.exercises)).reduce((accum, current)=>accum+current);
    return (
      <h3>total of {total} exercises</h3>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header course={course.name} />
        <Content  parts= {course.parts}  />
        <Total parts= {course.parts} />
       </>
    )
  }

  export default Course;