import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('Front-end Beginners')

  return (
    <>
      <Box>
        <Typography variant='h3' sx={{margin: '20px'}}>
          {name}
        </Typography>
        <ChildrenOne  setName={setName}/>
      </Box>
    </>
  )
}


function ChildrenOne({setName}) {
  return <ChildrenTwo  setName={setName}/>
}


function ChildrenTwo({setName}) {

  return (
    <Box>
      <Button sx={{ width: '190px' }} variant="contained" onClick={() => setName('UK Developer')}>
        Mude o Nome
      </Button>
    </Box>
  )
}

export default App
