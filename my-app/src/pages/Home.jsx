import React from 'react'
import HomeGirl from '../assets/home-girl.png'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  const CV = 'https://drive.google.com/uc?export=download&id=1gLjRF0ROA5W8Q0L_D4KqC1Qqz3t55hni';
  return (
    <div className='container'>
      <div className="section1">
        <div className="girl-img-container">
        <img className='girlIMG' src={ HomeGirl } alt='Image of a girl'/>
        </div>
        <div className="intro-text">
          <h1>Hello, I'm <span className='fancy-text'>Dil</span>.</h1>
          <p>Passionate about problem-solving, innovation, and continuous learning. 
            I contribute to open-source communities and enjoy taking on new challenges in software development.</p>

            <a href= { CV } download><button className="cv-button">Download CV</button></a>
            <Link to='/contact'><button className="contact-button">Contact Me</button></Link>
        </div>
      </div>
      {/* <div className="section2">
        <div className="skills-container">
          <h1>My Skills</h1>
        </div>
      </div> */}
    </div>
  )
}

export default Home