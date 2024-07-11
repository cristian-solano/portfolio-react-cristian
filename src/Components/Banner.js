import React from 'react'
import '../Style/banner.css'
import profile from '../Images/Foto_de_perfil.jpeg'
import person from '../Images/profile.png'
import age from '../Images/age.png'
import country from '../Images/global.png'
import arrow from '../Images/arrowRight.png'
import { Link } from 'react-router-dom'
import reactIcon from '../Images/reactIcon.png'
import Js from '../Images/JSIcon.png'
import htmlIcon from '../Images/htmlIcon.png'
import cssIcon from '../Images/cssIcon.png'
import wordpress from '../Images/wordpressIcon.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-content'>
            <div className='banner-image'>
                <img src={profile} alt="profile"/>
                <div className='banner-opacity'>
                    <div className='banner-opacity-content'>
                        <img src={person} alt="person"/>
                        <span>Cristian Solano</span>
                    </div>
                    <div className='banner-opacity-content'>
                        <img src={age} alt="age"/>
                        <span>27 years old</span>
                    </div>
                    <div className='banner-opacity-content'>
                        <img src={country} alt="country"/>
                        <span>Bogotá, Colombia</span>
                    </div>
                </div>
            </div>
            <div className='banner-paragraph'>
                <div className='banner-title'>
                    <div className='banner-name'>
                        <h2>I'm Cristian Andres Solano</h2>
                    </div>
                    <h2>Frontend Developer</h2>
                    <div className='banner-images-tech'>
                        <img src={reactIcon} alt="react"/>
                        <img src={Js} alt="Js"/>
                        <img src={htmlIcon} alt="html"/>
                        <img src={cssIcon} alt="css"/>
                        <img src={wordpress} alt="wordpress"/>
                    </div>
                </div>
                <label htmlFor='banner-more' type="button" className='banner-button'>
                    <p>View More</p>
                </label>
            </div>    
        </div>
        <input type='checkbox' id="banner-more" style={{display: 'none'}}/>
        <div className='banner-view-more-container'>
            <label htmlFor='banner-more' className='banner-view-more-closed'>
                <p>X</p>
            </label>
            <div className='banner-view-content'>
                <Link to="/about-us" className='banner-view-items'>
                    <div className='banner-view-opacity'>
                        <h3>About me</h3>
                        <p>Experience, performance, Companies and Education</p>
                    </div>
                    <div className='banner-view-overflow-1'>
                        <p className='banner-view-p'>Go on</p>
                        <img className='banner-view-img' src={arrow} alt="go"/>
                    </div>
                </Link>
                <Link to="/portfolio" className='banner-view-items'>
                    <div className='banner-view-opacity'>
                        <h3>Projects</h3>
                        <p>Some projects realized with different technologies</p>
                    </div>
                    <div className='banner-view-overflow-2'>
                        <p className='banner-view-p'>Go on</p>
                        <img className='banner-view-img' src={arrow} alt="go"/>
                    </div>
                </Link>
                <Link to="/contact" className='banner-view-items'>
                    <div className='banner-view-opacity'>
                        <h3>Contact</h3>
                        <p>Contact channels where I can be contacted at a later date</p>
                    </div>
                    <div className='banner-view-overflow-3'>
                        <p className='banner-view-p'>Go on</p>
                        <img className='banner-view-img' src={arrow} alt="go"/>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Banner