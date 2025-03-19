import React from 'react';
import './Work.css';

import profile from "../../images/profile.jpg";
import foodDeliveryImg from "../../images/food_delivery.png";
import foodDeliveryHoverImg from "../../images/food_delivery_hover.jpg";
import notesImg from "../../images/notes_app.jpg";
import notesHoverImg from "../../images/notes_app_hover.jpg";
import weatherAppImg from "../../images/weather_app.jpg";
import weatherAppHoverImg from "../../images/weather_app_hover.jpg";
import foodMenuImg from "../../images/food_menu.jpg";
import foodMenuHoverImg from "../../images/food_menu_hover.jpg";
import dashboardImg from "../../images/dashboard.jpg";
import dashboardHoverImg from "../../images/dashboard_hover.jpg";

export const Work = () => {
  const projects = [
    {
      title: "Food Delivery App",
      shortDescription: "Order food easily from local restaurants.",
      description: "A user-friendly app to order food from local restaurants.",
      img: foodDeliveryImg,
      hoverImg: foodDeliveryHoverImg,
      link: "https://food-delivery-app-link.com",
    },
    {
      title: "Keep Notes",
      shortDescription: "Effortlessly manage your notes.",
      description: "An app for creating and managing notes effectively.",
      img: notesImg,
      hoverImg: notesHoverImg,
      link: "https://keep-notes-app-link.com",
    },
    {
      title: "Weather App",
      shortDescription: "Stay updated with the latest weather.",
      description: "Real-time weather updates and forecasts.",
      img: weatherAppImg,
      hoverImg: weatherAppHoverImg,
      link: "https://weather-app-link.com",
    },
    {
      title: "Food Menu",
      shortDescription: "Interactive menu for restaurants.",
      description: "An interactive menu for restaurants showcasing dishes.",
      img: foodMenuImg,
      hoverImg: foodMenuHoverImg,
      link: "https://food-menu1.vercel.app/",
    },
    {
      title: "Dashboard",
      shortDescription: "Track your analytics and performance.",
      description: "A dashboard for tracking analytics and performance metrics.",
      img: dashboardImg,
      hoverImg: dashboardHoverImg,
      link: "https://adis-intern.vercel.app/",
    },
  ];

  return (
    <div id="work" className="work">
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
            key={index}
            aria-label={`Visit ${project.title}`}
          >
            <div className="work-card-img-container">
              <img
                src={project.img}
                alt={project.title}
                className="work-card-img default"
              />
              <img
                src={project.hoverImg}
                alt={project.title}
                className="work-card-img hover"
              />
            </div>
            <div className="work-card-info">
              <h2 className="work-card-title">{project.title}</h2>
              <p className="work-card-short-description">{project.shortDescription}</p>
              <p className="work-card-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Live Deployment Section */}
      <div className="live-deployment">
        <h1>Live Deployment</h1>
        <ul>
          <li>
            <a
              href="https://food-menu1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Food Menu
            </a>
          </li>
          <li>
            <a
              href="https://nikki150502.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://adis-intern.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
