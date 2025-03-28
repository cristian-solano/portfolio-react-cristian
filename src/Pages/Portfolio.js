import React from 'react'
import '../Style/portfolio.css'
import links from '../Images/link.png'
import ImagesOoftu from '../Components/ImagesOoftu'


const Portfolio = () => {
  return (
    <div className='port-container'>
      <div className='port-content'>
        <div className='port-projects port-projects1'>
          <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              
              <a href="https://pokedex-cris.netlify.app/" target='blank'><p>View page</p><img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects8'>
         <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href='https://dragonball-skills.netlify.app/' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects2'>
          <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href="https://quotes-cris.netlify.app/" target='blank'><p>View page</p><img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects3'>
          <div className='port-projects-paragraph'>
            <p>Moya's Project</p>
            <label className='port-label'>
              <a href="https://moya-maritime.netlify.app/"><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects4'>
        <div className='port-projects-paragraph'>
            <p>Moya's Project</p>
            <label className='port-label'>
              <a href="https://template-website-moya.netlify.app/" target='black'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects5'>
          <div className='port-projects-paragraph'>
            <p>Nobara's Project</p>
            <label className='port-label' htmlFor='label-ooftu'>
              <p>VIEW PAGE</p> <img src={links} alt="enlace"/>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects6'>
         <div className='port-projects-paragraph'>
            <p>Freelance Project</p>
            <label className='port-label'>
              <a href='https://psicologa-ana-jaramillo.netlify.app/' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects7'>
         <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href='https://image-digital-adventure.netlify.app/' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects9'>
         <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href='https://salesapp-sales.netlify.app/' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <input type='checkbox' id="label-ooftu" style={{display: "none"}}/>
        <div className='port-view-ooftu'>
          <label htmlFor='label-ooftu' className='label-ooftu-closed'>
            <p>X</p>
          </label>
          <ImagesOoftu/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio