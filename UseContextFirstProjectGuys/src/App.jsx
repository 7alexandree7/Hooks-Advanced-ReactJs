import './App.css'
import MiniDrawer from './components/MiniDrawer/MiniDrawer'
import { Box, Typography } from '@mui/material'
import { Outlet } from "react-router-dom";


function App() {

  return (
    <>

      <Box sx={
        {
          backgroundColor: '#fff',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '80%',
          margin: 'auto'
        }}>
        <MiniDrawer />
        <Outlet />
      </Box>
    </>
  )
}

export default App
