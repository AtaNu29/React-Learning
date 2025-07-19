import { useState } from 'react'
import './App.css'
import Random from './random'

function App() {
  const userName = "Toxic Paradox";
  return (
    <> 
      <Random/>
      <h1>HI Fox {userName}</h1>
      <h4>Lorem ipsum dolor sit amet consectetur!</h4>
    </>
    
  ) 
}
 
export default App
