import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

    const Increment = () => {
    if (counter < 20) {
      setCounter(prev => prev + 1); // Basically (prev) => prev + 1 -> "previous value"
    }
  }

  const Decrement = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
    }
  }
  
  return (
    <>
      <h1>Counter First value : {counter}</h1> <br />

      <button
      onClick={Increment}
      >Increment</button> <br /> <br />

      <button
      onClick={Decrement}
      >Decrement</button> <br />

      <h1>Counter Second value : {counter}</h1> 
    </>
  )
}

export default App
