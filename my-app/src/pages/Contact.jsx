import React, { useState, useEffect} from 'react'
import '../styles/contact.css'
import InstaIcon from '../assets/instagram.png'
import LinkedInIcon from '../assets/linkedin.png'
import GithubIcon from '../assets/github.png'
import MailIcon from '../assets/mail.png'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation();
  const githubLink = location.state?.github || "Default Link"; // Fallback if no state
  const linkedinLink = location.state?.linkedin || "Default Link";
  const instaLink = location.state?.insta || "Default Link";
  const mailLink = location.state?.mail || "Default Link";

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Hide the spinner after 0.5s 
      }, 500); 
  
      return () => clearTimeout(timer); // Cleanup timeout
    }, []);

  return (
    <div>
      {/* Show spinner while loading */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="contact-intro">
            <div className="bg-image">
              
            </div>
            <div className="contact-intro-text">
              <h1>Contact Me</h1>
              <p>I’d love to hear from you! Whether you have questions, feedback, 
                or just want to connect, feel free to reach out. 
                Your thoughts are always welcome.</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="left-section">
              <div className='get-in-touch-container'>
                Get in <span className="span-contact">touch</span>
              </div>
              <div className="socials-container">
                    <a href= { instaLink } target='_blank'> <img src={ InstaIcon } alt="instagram icon" /></a>
                    <a href = { linkedinLink } target='_blank'> <img  src={ LinkedInIcon } alt="linkedin icon" /></a>
                    <a href= { githubLink } target='_blank'> <img src={ GithubIcon } alt="github icon" /></a>
                    <a href= { mailLink } target='_blank'> <img src={ MailIcon } alt="mail icon" /></a>

              </div>
            </div>
            <div className="right-section">
              <div className="form-group">
                <div className="input-container">
                  <label className="form-tag">Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="input-container">
                  <label className="form-tag">Mail</label>
                  <input type="text" name="email" className="form-input" placeholder="Enter your email" />
                </div>
                <div className="input-container">
                  <label className="form-tag">Inquiry</label>
                  <textarea rows="10" name="inquiry" className="form-input" placeholder="Enter your inquiry"></textarea>
                </div>
                <button className='submit-button'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
