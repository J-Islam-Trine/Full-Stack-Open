import React from 'react'

const Person = (props) => {


    return (
        <table>
     <tbody>
     {props.persons.map(
         person => 
         <tr key={person.name}>
             <td>{person.name}</td>
             <td>{person.number}</td>
             <td><button onClick={()=> props.onClick(person.id, person.name)}>delete</button></td>
             </tr>)}
     </tbody>
      </table>
    )
}

export default Person