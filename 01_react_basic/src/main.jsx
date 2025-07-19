import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div> 
      <h1>HI Fox i am function</h1>
    </div>
    
  )
}

// const reactElement = {
//   type: 'a', 
//   props:{
//     href: 'https://www.google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
const text = ' Hello, world!';
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit Google',
  text
)

const AnotherElement = (
    <a target='_blank' href="https://www.google.com">Click me to visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
  // <App />

)
