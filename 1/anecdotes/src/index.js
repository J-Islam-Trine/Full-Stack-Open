import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0)
  {
    return (
      <div>
        <p>There's no click yet.</p>
      </div>
    )
  }

  return (
    <div>
      <p>History: {props.allClicks.join("")}</p>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({left:0, right: 0});
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setClicks({...clicks, left: clicks.left+1});
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setClicks({...clicks, right: clicks.right+1});
  }

  return (
    <div>
        {clicks.left}
      <Button onClick={handleLeftClick} text="Left" />
        <Button onClick={handleRightClick} text="Right" />
        {clicks.right}
        <History allClicks = {allClicks} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));