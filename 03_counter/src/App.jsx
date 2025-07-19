import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(5);

  const addValue = () => {
    if (counter < 20) {
     setCounter(prev => prev + 1);
    }
    
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
    }
    }

  return (
    <>
      <h1>New count project</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
