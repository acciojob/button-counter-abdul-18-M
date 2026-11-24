import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  
  const  [counter, setCounter] = useState(0)

  const  counterIncrease = () =>{
    setCounter( counter + 1)

  }


  return (
    <div>

      <p>Button clicked {counter} times</p>


      <button onClick={counterIncrease}>Click me</button>
        
    </div>
  )
}

export default App
