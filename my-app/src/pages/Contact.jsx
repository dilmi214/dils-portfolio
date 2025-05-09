import React, { useState, useEffect} from 'react'
import '../styles/contact.css'
import InstaIcon from '../assets/instagram.png'
import LinkedInIcon from '../assets/linkedin.png'
import GithubIcon from '../assets/github.png'
import MailIcon from '../assets/mail.png'
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/toastStyles.css';


const Contact = () => {
  const queryParams = new URLSearchParams(useLocation().search);

  const githubLink = queryParams.get('github') || "Default Link";
  const linkedinLink = queryParams.get('linkedin') || "Default Link";
  const instaLink = queryParams.get('insta') || "Default Link";
  const mailLink = queryParams.get('mail') || "Default Link";

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Hide the spinner after 0.5s 
      }, 500); 
  
      return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // service ID        
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template ID
        e.target, // The form element
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // user ID
      ).then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          toast.success('Your message has been sent successfully! We will get back to you soon.');
        },
        (error) => {
          console.error('Email sending error:', error.text);
          toast.error('Oops! Something went wrong. Please try again later.');
        }
      );
    
      e.target.reset(); // Reset form fields
    };
    
    

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              <form className="form-group" onSubmit={sendEmail}>
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
                <input type="hidden" name="time" value={new Date().toLocaleString()}/>
                <button type="submit" className='submit-button'>Submit</button> 
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
