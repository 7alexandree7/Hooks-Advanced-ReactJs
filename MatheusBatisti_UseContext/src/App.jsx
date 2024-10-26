import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
    <Outlet />
    <NavBar />
    </>
  )
}

export default App
