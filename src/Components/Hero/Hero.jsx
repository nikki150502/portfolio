import React from 'react'
import './Hero.css'
import profile from "../../images/profile.jpg"

export const Hero = () => {
  return (
     <>
     <div id='hero' className="hero">
        <img src={profile} alt="nikita" />
        <h1><span>I'am Nikita Kumawat,</span> frontend Developer</h1>
        <p>As a self-motivated individual, I consistently strive to exceed expectations through high-quality work. I am a fast learner, eager to quickly absorb business knowledge and apply it effectively to my projects. Whether working independently or as part of a team, I bring a proactive and collaborative approach to everything I do.</p>
    <div className="hero-action">
        <div className="hero-connect">Connect</div>
        <div className="hero-resume">My Resume</div>
    </div>
     </div>
     </>
  )
}
