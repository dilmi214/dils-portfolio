import React from 'react'
import HomeGirl from '../assets/home-girl.png'
import '../styles/Home.css'
const Home = () => {
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
        </div>
      </div>
      <div className="section2">
        <div className="skills-container">
          <h1>My Skills</h1>
        </div>
      </div>
    </div>
  )
}

export default Home