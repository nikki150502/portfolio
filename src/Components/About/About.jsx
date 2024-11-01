import React from 'react';
import './About.css';
import profile from "../../images/profile.jpg";
import logo from "../../images/logo (2).jpg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={logo} alt="Logo" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As a self-motivated individual, I consistently strive to exceed expectations through high-quality work.</p>
            <p>Being a young adult, I possess new and innovative ideas.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10</h1>
          <p>Academics</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
