import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Statistic = ({text, value}) => {
  if (text === "positive")
  {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good+neutral+bad;
  let score = good*(+1)+neutral*(0)+ bad*(-1);
  let percentage = (good/total)*100;
  if (good+neutral+good>0)
  {
    return(
      <div>
        <Title text="statistics" />
      <table>
        <tbody>
        <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="average" value={score/total}/>
          <Statistic text="positive" value={percentage}/>
      
        </tbody>
          </table>
      </div>
    )
  }
  else
  {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
}

const App = () => {
      const [good, setGood] = useState(0);
      const [neutral, setNeutral] = useState(0);
      const [bad, setBad] = useState(0);

      const handleGood = () => {
        setGood(good+1);
      }

      const handleNeutral = () => {
        setNeutral(neutral+1);
      }

      const handleBad = () => {
        setBad(bad+1);
      }
  return (
    <div>
        <Title text="give feedback" />
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
        
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));


