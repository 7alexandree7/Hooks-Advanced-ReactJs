import React from 'react'
import NavBar from '../components/NavBar'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';

const Home = () => {

  const {theme, toogleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1>Pagina Inicial Da Aplicação</h1>
      <p>{`O tema atual é ${theme}`}</p>
      <button onClick={toogleTheme}>Mudar O Tema</button>
      <NavBar />
    </div>
  )
}

export default Home
