import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cartcomponent from './cart.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>THis is main component page;</h1>
      <Cartcomponent />
    </>
  )
}

export default App
