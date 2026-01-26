import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAlert from './components/Bai3/ButtonAlert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ButtonAlert></ButtonAlert>
    </>
  )
}

export default App
