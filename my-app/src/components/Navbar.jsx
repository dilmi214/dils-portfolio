import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='fancy-text'>Dil's Space</p>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to = '/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar