import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../components/Navbar.css';
import { socialLinks } from '../assets/links';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

    // Close menu on route change
    useEffect(() => {
      setMenuOpen(false);
    }, [location]);
  
  return (
    <div className='navbar'>
        <div className="navbar-header">
          <p className="fancy-text">Dil's Space</p>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>

        <Link to='/'><li>Home</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        {/* <Link to='/beyond-code'><li>Beyond Code</li></Link> */}
        <Link to={`/contact?github=${encodeURIComponent(socialLinks.github)}&linkedin=${encodeURIComponent(socialLinks.linkedin)}&insta=${encodeURIComponent(socialLinks.insta)}&mail=${encodeURIComponent(socialLinks.mail)}`}>Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;