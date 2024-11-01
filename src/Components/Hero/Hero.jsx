import React from 'react'
import './Hero.css'
import photo from "../../images/photo (2).jpeg"
import resume from '../../images/resume.png';

export const Hero = () => {
  return (
    <>
      <div id='hero' className="hero">
        <img src={photo} alt="nikita" />
        <h1><span>I'am Nikita Kumawat,</span> frontend Developer</h1>
        <p>As a self-motivated individual, I consistently strive to exceed expectations through high-quality work. I am a fast learner, eager to quickly absorb business knowledge and apply it effectively to my projects. Whether working independently or as part of a team, I bring a proactive and collaborative approach to everything I do.</p>
        <div className="hero-action">
          <a href="https://www.linkedin.com/in/nikita-kumawat-976b7828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <div className="hero-connect">Connect</div>
          </a>  
          <a href= {resume} target="_blank" rel="noopener noreferrer">
            <div className="hero-resume">My Resume</div>
          </a>  
        </div>
      </div>
    </>
  )
}
