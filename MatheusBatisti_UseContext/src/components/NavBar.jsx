import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', marginTop: '1rem'}}>
        <li style={{display: 'flex', gap: '1rem'}}>
            <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
            <Link style={{textDecoration: 'none'}} to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
