import './App.css'
import MiniDrawer from './components/MiniDrawer/MiniDrawer'
import { Box, Typography } from '@mui/material'
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div>        
        <MiniDrawer />
        <Outlet />
        
    </div>

  )
}

export default App
