import { useEffect } from 'react'

import './App.css'
import Nav from './component/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './component/aoth/login'
import Register from './component/aoth/register'
import Votes from './component/page/Votes'
import Statistics from './component/page/Statistics'
import { socket } from './main'
import { useAppDispatch } from './redux/store'
import { fetchCandidates } from './redux/slices/candidateSlice'
import Addcandidate from './component/page/addcandidate'


function App() {  
  const dispatch = useAppDispatch();
  useEffect(() =>{
    socket.on('newvote', () =>{
      console.log("ffffffffffffffffff")
      dispatch(fetchCandidates());
    })
  },[])
  console.log("apppp")
  return (
    <div className='app'>
      <Nav/>   
      <Routes>
        <Route path='login' element ={<Login/>} />
        <Route path='register' element ={<Register/>} />
        <Route path='votes' element ={<Votes/>} />
        <Route path='addcandidate' element ={<Addcandidate/>} />
        <Route path='Statistics' element ={<Statistics/>} />
        <Route path="/" element={<Navigate to={"/login"} />} />
        </Routes>    
    </div>
  )
}

export default App
