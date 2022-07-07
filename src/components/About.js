import React from 'react'
import logoImage from "../Images/yuka.jpg"


const About = () => {
  return (
    <div className='about row align-items-center'>
      <div className="about-backtext">ABOUT</div>
      <div className="about-image d-flex justify-content-center col-lg-6 col-md-6">
        <div className="icon-wrapper-2">
          <div className="icon-wrapper-1">
            <img
              className='about-icon'
              alt="about-icon"
              src={logoImage}
            />
          </div>
        </div>
      </div>
      <div className="about-info px-5 col-lg-6 col-md-6">
        <h1>Hi I'm <span>K</span>awa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aperiam mollitia ipsa quibusdam modi non eum facilis illum ut. Laboriosam ipsam molestiae iure nesciunt aspernatur nam doloribus labore amet adipisci!</p>
        <div className='line'></div>
        <div className="about-sns">
          <p>Twitter</p>
          <p>Pixiv</p>
        </div>
      </div>
    </div>
  )
}

export default About
