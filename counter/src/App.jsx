import { useState } from 'react'
import './App.css'

  const Counter = () =>{
    let[counter , setCounter] = useState(0);
    let[inputValue , setInputValue] = useState(0);
    const increase = () =>{
      setCounter(Number(counter  + inputValue));
    }
    const decrease = () =>{
      setCounter(Number(counter - inputValue));
    }
    const getvalue = (e) =>{
      setInputValue(Number(e.target.value));
    }
    return <>
      <div className="container">
        <h3>{counter}</h3>
        <input type="text" onChange={getvalue}  />
        <div className="btn">
          <button className="incbtn"onClick={increase}> + </button>
          <button className="decbtn" onClick={decrease}> - </button>

        </div>
      </div>
    </>
  }


  const App = () =>{
    return<>
      <Counter/>
    </>
  }



export default App;