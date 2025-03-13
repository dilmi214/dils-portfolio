import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';


const Navbar = () => {
  let githubLink = "https://github.com/dilmi214";
  let linkedinLink = "https://www.linkedin.com/in/dilmi-fernando-078a99251/"
  let instaLink = "https://www.instagram.com/dilmi.v"
  let mailLink = "https://mail.google.com/mail/?view=cm&to=dilmifernando214@gmail.com"
  return (
    <div className='navbar'>
        <p className='fancy-text'>Dil's Space</p>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to = '/about'><li>About</li></Link>
            <Link to='/contact' state={{ github: githubLink, linkedin: linkedinLink, insta: instaLink, mail: mailLink }}><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar