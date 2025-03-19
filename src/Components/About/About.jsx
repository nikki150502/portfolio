import React from 'react';
import './About.css';
import photo from "../../images/photo (2).jpeg";

const skills = [
  { name: "HTML & CSS", width: "85%" },
  { name: "React.js", width: "75%" },
  { name: "JavaScript", width: "80%" },
  { name: "Problem-Solving", width: "90%" },
  { name: "Node.js", width: "70%" },
  { name: "Express.js", width: "65%" },
  { name: "Data Structures & Algorithms", width: "85%" }
];

const Skill = ({ name, width }) => (
  <div className="about-skill">
    <p>{name}</p>
    <hr style={{ width }} />
  </div>
);

export const About = () => {
  return (
    <section id="about" className="about">
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      {/* About Section */}
      <div className="about-sections">
        {/* Left Side (Image) */}
        <div className="about-left">
          <img src={photo} alt="Profile of Developer" />
        </div>

        {/* Right Side (Text & Skills) */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a 3rd-year B.Tech student specializing in Computer Science Engineering.
              Passionate about web development and problem-solving, I strive to build
              impactful and efficient applications.
            </p>
            <p>
              My approach blends creativity with strong analytical skills, helping me
              deliver user-friendly and optimized solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <Skill key={index} name={skill.name} width={skill.width} />
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="about-achievement">
          <h1>10</h1>
          <p>Academic Achievements</p>
        </div>
      </div>
    </section>
  );
};
