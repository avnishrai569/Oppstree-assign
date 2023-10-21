import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {
  const [count, setcount] = useState(0);
  const inc =() => {
    setcount(count +1);
  }
  const Dec =() =>{
    if(count <= 0 ){
      return;
    }
    setcount(count-1);
  }
  return (
    <div className="App">
      <h1>My Counter</h1>
      <p>{count}</p>
      <div>
      <button onClick={inc}>Increase</button>
      </div>
      <button onClick={Dec}>Decrease</button>
    </div>
  );
}

export default App;
