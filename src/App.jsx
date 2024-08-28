import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CSS from './App.module.css'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Education from './components/Education'
import Feedback from './components/Feedback'
import {BrowserRouter, Route, Link, Routes, redirect} from "react-router-dom";

function App() {
 
  return (
    <div>
     <BrowserRouter>
     <nav className={CSS.bar}>
      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/education'>Education</Link>
      <Link to='/feedback'>Feedback</Link>
     </nav>
     <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/contacts' Component={Contacts}/>
      <Route path='/projects' Component={Projects}/>
      <Route path='/education' Component={Education}/>
      <Route path='/feedback' Component={Feedback}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
