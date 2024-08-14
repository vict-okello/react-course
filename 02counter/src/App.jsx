import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter, setCounter] = useState(0)
 // let counter = 15
  const addValue = () =>{
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
    setCounter((preCounter) => preCounter+1)
  }
  const removeValue = () =>{
    setCounter((preCounter) => preCounter-1)
    setCounter((preCounter) => preCounter-1)
    setCounter((preCounter) => preCounter-1)
    setCounter((preCounter) => preCounter-1)
  }

  return (
    <>
      <h1>React course {counter} </h1>
      <h2>Counter Value {counter} </h2>
      <button 
      onClick={addValue}
      
      >Add Value</button> {""}
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>Footer {counter} </p>
    </>
  )
}

export default App
