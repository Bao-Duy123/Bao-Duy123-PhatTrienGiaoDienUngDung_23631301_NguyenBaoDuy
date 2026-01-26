import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAlert from './components/Bai3/ButtonAlert'
import LoginForm from './components/Bai4/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='buoi1-bai3'>
      <h1>Buổi 1 bài 3</h1>
     <ButtonAlert></ButtonAlert>
    </div>

    <div className='buoi1-bai4'>
      <h1>Bài 4</h1>
      <LoginForm />
    </div>

    </>
  )
}

export default App
