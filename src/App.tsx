import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import Login from './component/aoth/login'
import Register from './component/aoth/register'
import Votes from './component/page/Votes'
import Statistics from './component/page/Statistics'

function App() {  

  return (
    <div>
      <Nav/>   
      <Routes>
        <Route path='login' element ={<Login/>} />
        <Route path='register' element ={<Register/>} />
        <Route path='Votes' element ={<Votes/>} />
        <Route path='Statistics' element ={<Statistics/>} />
        </Routes>    
    </div>
  )
}

export default App
