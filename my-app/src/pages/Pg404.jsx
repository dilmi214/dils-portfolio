import React from 'react'
import graphic404 from '../assets/404graphic.png'
import '../styles/Pg404.css'
import { Link } from 'react-router-dom'

const Pg404 = () => {
  return (
    <div className='container'>
      <div className="sub-container">
        <div className='graphic-container'>
          <img src= { graphic404}/>
        </div>
        <div className='message-404'>
          <h1>Oooops!</h1>
          <h2>Page not found :( </h2>
          <Link to='/'><button className='home-button'>Go Back Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Pg404