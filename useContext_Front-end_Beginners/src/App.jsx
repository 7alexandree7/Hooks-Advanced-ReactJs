import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildrenTwo from './Components/ChildrenTwo'
import Result from './Components/Result'

function App() {
  const [name, setName] = useState('Front-end Beginners')

  return (
    <>
      <Result />
      <ChildrenOne />
      <ChildrenTwo />
    </>
  )
}

export default App
