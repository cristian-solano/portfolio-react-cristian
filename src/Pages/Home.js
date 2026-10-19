import React from 'react'
import '../Style/home.css'
import descript from '../Images/descrp.jpg'
import educa from '../Images/education.jpg'
import expertise from '../Images/code.png'
import performance from '../Images/performance.png'
import mendescr from '../Images/menuDescrp.png'
import meneduc from '../Images/menuEduc.png'
import menexpe from '../Images/menuExperi.png'
import menperf from '../Images/menuPerfor.png'
import academlo from '../Images/academlo.jpeg'
import usta from '../Images/usta.gif'
import moya from '../Images/moya-blanco.png'
import nobara from '../Images/nobara.png'
import cafam from '../Images/cafam.jpg'
import elipsis from '../Images/elipsis.png'
import htmlIcon from '../Images/htmlIcon.png'
import cssIcon from '../Images/cssIcon.png'
import wordpress from '../Images/wordpressIcon.png'
import reactIcon from '../Images/reactIcon.png'
import periferia from '../Images/periferia.png'
import angular from '../Images/angular_icon.webp'
import nodejs from '../Images/node.webp'
import mongo from '../Images/mongo_icon.png'
import aws from '../Images/aws_icon.webp'
import Js from '../Images/JSIcon.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const BtnDescription = () => {
    document.getElementById("descrp_").style.display = "flex"
    document.getElementById("exper_").style.display = "none"
    document.getElementById("educ_").style.display = "none"
    document.getElementById("perfm_").style.display = "none"
  }

  const BtnExperience = () => {
    document.getElementById("descrp_").style.display = "none"
    document.getElementById("exper_").style.display = "flex"
    document.getElementById("educ_").style.display = "none"
    document.getElementById("perfm_").style.display = "none"
  }

  const BtnEducation = () => {
    document.getElementById("descrp_").style.display = "none"
    document.getElementById("exper_").style.display = "none"
    document.getElementById("educ_").style.display = "flex"
    document.getElementById("perfm_").style.display = "none"
  }

  const BtnPerformance = () => {
    document.getElementById("descrp_").style.display = "none"
    document.getElementById("exper_").style.display = "none"
    document.getElementById("educ_").style.display = "none"
    document.getElementById("perfm_").style.display = "flex"
  }


  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='home-content-principal'>
          <div className='home-content-item1' id="descrp_">
            <div className='home-content-info-title'>
              <h3>Description</h3>
            </div>
            <div className='home-content-info-resume'>
              <div className='home-content-info-image'>
                <img src={descript} alt="descrpt" />
              </div>
              <div className='home-content-info-subtitle home-button-next'>
                <p><strong>Front-end developer</strong>  with over 4 years of experience in the design, development, and implementation of applications that integrate various technologies and programming languages. Responsive and adaptable designs for any platform. I also have experience in backend development, creating microservices with use-case-driven functionality and managing both relational databases such as PostgreSQL and non-relational databases such as MongoDB. I have knowledge of integrations and deployments using GitLab and Bitbucket.</p>
                <div className='home-content-projects-link'>
                  <a href="https://canva.link/w71f476edeuihrz" target='blank'>Resume CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className='home-content-item2' id="educ_">
            <div className='home-content-info-title'>
              <h3>Education</h3>
            </div>
            <div className='home-content-info-resume'>
              <div className='home-content-info-image'>
                <img src={educa} alt="descrpt" />
              </div>
              <div className='home-content-info-subtitle'>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={cafam} alt="cafam" />
                    <p><strong>Cafam</strong>, Certificate in Project Management and Planning (PMI and SCRUM), 2024</p>
                  </div>
                </div>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={academlo} alt="academlo" />
                    <p><strong>Academlo</strong>, Full stack web development & computer science, 2022</p>
                  </div>
                </div>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={usta} alt="university" />
                    <p><strong>Saint Thomas University</strong>, Physical culture, sport and recreation, 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='home-content-item3' id="exper_">
            <div className='home-content-info-title'>
              <h3>Experience</h3>
            </div>
            <div className='home-content-info-resume'>
              <div className='home-content-info-image'>
                <img src={expertise} alt="descrpt" />
              </div>
              <div className='home-content-info-subtitle'>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={periferia} alt="periferia" />
                    <p><strong>Periferia</strong>, Full stack web developer, March 2025</p>
                  </div>

                  <label htmlFor='home-more-exper' className='home-content-info-label'>
                    <img src={elipsis} alt="elipsis" />
                    <p>View more</p>
                  </label>
                </div>
                <input type="checkbox" id="home-more-exper" style={{ display: "none" }} />
                <div className='home-information-expe'>
                  <label className='home-information-closed' htmlFor='home-more-exper'>
                    <p>X</p>
                  </label>
                  <div className='home-information-content'>
                    <img src={periferia} alt="periferia" />
                    <div className='home-information-content-work'>
                      <p>Implementation and development of designs using Angular.</p>
                      <p>Client-oriented functionality, taking into account the mockups presented in Figma.</p>
                      <p>Use of REST APIs to consume services.</p>
                      <p>Creation of services with Node.js and Nest.js.</p>
                      <p>Management of Docker containers on Amazon ECS.</p>
                    </div>
                    <div className='home-technologies'>
                      <img src={angular} alt="Angular" />
                      <img src={htmlIcon} alt="HTML" />
                      <img src={cssIcon} alt="CSS" />
                      <img src={nodejs} alt="Node.js" />
                      <img src={mongo} alt="MongoDB" />
                      <img src={aws} alt="AWS" />
                    </div>
                  </div>
                </div>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={moya} alt="academlo" />
                    <p><strong>Moya Design partners</strong>, Full stack web developer, May 2024</p>
                  </div>

                  <label htmlFor='home-more-exper' className='home-content-info-label'>
                    <img src={elipsis} alt="elipsis" />
                    <p>View more</p>
                  </label>
                </div>
                <input type="checkbox" id="home-more-exper" style={{ display: "none" }} />
                <div className='home-information-expe'>
                  <label className='home-information-closed' htmlFor='home-more-exper'>
                    <p>X</p>
                  </label>
                  <div className='home-information-content'>
                    <img src={moya} alt="moya" />
                    <div className='home-information-content-work'>
                      <p>Wordpress landing page development and implementation.</p>
                      <p>Implementation of newsletter design in Zoho CRM.</p>
                      <p>Tracking of statistics with Google analytics of the company's website.</p>
                      <p>Creation of tracking reports and presentation of monthly metrics of the website.</p>
                      <p>Implementation of Web page design for internal company projects.</p>
                    </div>
                    <div className='home-technologies'>
                      <img src={wordpress} alt="wordpress" />
                      <img src={htmlIcon} alt="HTML" />
                      <img src={cssIcon} alt="CSS" />
                    </div>
                  </div>
                </div>
                <div className='home-content-info-subt-items'>
                  <div className='home-content-info-subt-item-info'>
                    <img src={nobara} alt="university" />
                    <p><strong>Nobara</strong>, Frontend developer, Sept 2022 - Apr 2024</p>
                  </div>
                  <label htmlFor='home-more-exper1' className='home-content-info-label'>
                    <img src={elipsis} alt="elipsis" />
                    <p>View more</p>
                  </label>
                </div>
                <input type="checkbox" id="home-more-exper1" style={{ display: "none" }} />
                <div className='home-information-expe'>
                  <label className='home-information-closed' htmlFor='home-more-exper1'>
                    <p>X</p>
                  </label>
                  <div className='home-information-content'>
                    <img src={nobara} alt="nobara" />
                    <div className='home-information-content-work'>
                      <p>Build modern web components for an enterprise software solution.</p>
                      <p>Work closely with backend developers to consume REST services.</p>
                      <p>Experience using on React.js, SocketIO, CSS3, Figma and Tailwind on my daily work.</p>
                    </div>
                    <div className='home-technologies'>
                      <img src={reactIcon} alt="React" />
                      <img src={Js} alt="Javascript" />
                      <img src={htmlIcon} alt="HTML" />
                      <img src={cssIcon} alt="CSS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='home-content-item4' id="perfm_">
            <div className='home-content-info-title'>
              <h3>Performance</h3>
            </div>
            <div className='home-content-info-resume'>
              <div className='home-content-info-image'>
                <img src={performance} alt="performance" />
              </div>
              <div className='home-content-info-subtitle home-button-next'>
                <p>Projects carried out at professional and academic level since I started in the world of programming.</p>
                <div className='home-content-projects-link'>
                  <Link to="/portfolio">Go to Projects</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-menu'>
          <div className='home-menu-items' onClick={BtnDescription}>
            <img src={mendescr} alt="icon1" />
            <p>Description</p>
          </div>
          <div className='home-menu-items' onClick={BtnEducation}>
            <img src={meneduc} alt="icon1" />
            <p>Education</p>
          </div>
          <div className='home-menu-items' onClick={BtnExperience}>
            <img src={menexpe} alt="icon1" />
            <p>Experience</p>
          </div>
          <div className='home-menu-items' onClick={BtnPerformance}>
            <img src={menperf} alt="icon1" />
            <p>Performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
