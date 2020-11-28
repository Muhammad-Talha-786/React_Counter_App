import React, {useState} from 'react';
import Counter from './counter';
import './App.css';

function App() 
{
  let [count, setcount] = useState(0);
  let [theme, settheme] = useState(true);
  return (
    <div className={`Box ${theme ? 'Night_Time' : 'Day_Time'}`}>
      <br/>
      <Counter counterValue={count}/>
      <button onClick={()=>setcount(++count)}>Click to Count</button>
      <br/><br/>
      <button onClick={()=>settheme(!theme)}>Change Background theme</button>
    </div>
  );
}

export default App;
