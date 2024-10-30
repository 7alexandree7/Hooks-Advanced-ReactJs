import React from 'react'
import Button from '../../components/Button/Button'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Drafts = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`contentPage  ${theme == 'dark' ? 'dark-theme' : ''}`}>
      <h1>Pagina do Drafts</h1>
      <Button />
    </div>
  )
}

export default Drafts
