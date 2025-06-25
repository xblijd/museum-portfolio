import { useState } from 'react'
import Experience from './Experience/Experience'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Experience></Experience>
    </>
  )
}

export default App
