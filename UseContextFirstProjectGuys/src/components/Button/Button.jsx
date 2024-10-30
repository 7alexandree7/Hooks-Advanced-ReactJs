import React from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { useContext } from 'react'

const Button = () => {

  const {toogleMode} = useContext(ThemeContext)

  return (
    <div>
      <button onClick={toogleMode} className='btnGlobal' >Change Background</button>
    </div>
  )
}

export default Button
