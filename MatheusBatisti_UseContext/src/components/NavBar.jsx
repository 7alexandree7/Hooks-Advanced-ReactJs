import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
