import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Input/>
    </>
  )
}

export default App
