import React from 'react'
import NavBar from '../components/NavBar'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';

const Contact = () => {

  const {theme, toogleTheme} = useContext(ThemeContext)
  return (
    <div>
      <h1>Contact</h1>
      <p>{`A classe é ${theme}`}</p>
      <button onClick={toogleTheme}>Testando aqui tambem</button>
      <NavBar />
    </div>
  )
}

export default Contact
