
import { Box, Button, Typography } from '@mui/material'
import './App.css'
import AppProvider from './context/AppProvider'
import ChildrenOne from './Components/ChildrenOne'
import ChildrenTwo from './Components/ChildrenTwo'


function App() {

  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}

export default App
