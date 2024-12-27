import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TictacToe from './Components/TictacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TictacToe />
    </>
  )
}

export default App
