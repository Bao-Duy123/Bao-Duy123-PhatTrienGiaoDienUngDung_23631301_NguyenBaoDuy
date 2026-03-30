import React from 'react';
import {Route, Link} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'

function App() {
  return(
    <>
       <nav>
         <Link to='/'>Home</Link>|
         <Link to='/about'>About</Link>|
         <Link to='/contact'>Contact</Link>
       </nav>

       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  )
}

export default App
