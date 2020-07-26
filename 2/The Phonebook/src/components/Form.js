import React from 'react' 

const Form = (props) => {
    //  console.log(props)

    return(
        <form onSubmit={props.onSubmit}>
        <div>
          name: <input onChange={props.nameHandler}/>
        </div>
        <div>
            number: <input onChange={props.numberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form;