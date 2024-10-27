import { Outlet } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react';
import './App.css'


function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Outlet />
    </div>

  )
}

export default App
