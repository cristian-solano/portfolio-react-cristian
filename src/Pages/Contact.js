import React from 'react'
import '../Style/contact.css'
import { Link } from 'react-router-dom'
import home from '../Images/home.png'
import facebook from '../Images/faceIcon.png'
import instagram from '../Images/instaIcon.png'
import linkedin from '../Images/linkedinIcon.png'
import github from '../Images/githubIcon.png'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <div className='contact-info'>
          <h3>To Contact</h3>
          <div className='contact-info-items'>
            <p>+57 3014088482</p>
            <p>cristiansolano1941@gmail.com</p>
            <p>Bogotá</p>
            <p>Colombia</p>
          </div>
        </div>
        <div className='contact-social'>
          <Link className='contact-back' to="/home">
            <img src={home} alt="home"/>
            <p>Go to home</p>
          </Link>
          <div className='contact-social-links'>
            <h3>Social Media</h3>
            <div className='contact-social-icons'>
              <a href="https://www.facebook.com/nameandres/" target='blank'><img src={facebook} alt=""/></a>
              <a href="https://www.instagram.com/andresmald19/" target='blank'><img src={instagram} alt=""/></a>
              <a href="https://www.linkedin.com/in/cristian-andres-solano-maldonado-0707881b4/" target='blank'><img src={linkedin} alt=""/></a>
              <a href="https://github.com/cristian-solano" target='blank'><img src={github} alt=""/></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact 