import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';
import { socialLinks } from '../assets/links';

const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='fancy-text'>Dil's Space</p>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            {/* <Link to = '/beyond-code'><li>Beyond Code</li></Link> */}
            <Link to={`/contact?github=${encodeURIComponent(socialLinks.github)}&linkedin=${encodeURIComponent(socialLinks.linkedin)}&insta=${encodeURIComponent(socialLinks.insta)}&mail=${encodeURIComponent(socialLinks.mail)}`}>Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar