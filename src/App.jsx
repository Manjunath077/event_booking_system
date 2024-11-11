import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import Events from './components/pages/Events'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import EventDetails from './components/pages/EventDetails'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/eventdetails/:eid' element={<EventDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App