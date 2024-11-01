import React from 'react';
import './Work.css';

import profile from "../../images/profile.jpg";
import foodDeliveryImg from "../../images/food_delivery.png"; // Replace with actual image path
import foodDeliveryHoverImg from "../../images/food_delivery_hover.jpg"; // Replace with actual hover image path
import notesImg from "../../images/notes_app.jpg"; // Replace with actual image path
import notesHoverImg from "../../images/notes_app_hover.jpg"; // Replace with actual hover image path
import weatherAppImg from "../../images/weather_app.jpg"; // Replace with actual image path
import weatherAppHoverImg from "../../images/weather_app_hover.jpg"; // Replace with actual hover image path
import foodMenuImg from "../../images/food_menu.jpg"; // Replace with actual image path
import foodMenuHoverImg from "../../images/food_menu_hover.jpg"; // Replace with actual hover image path
import dashboardImg from "../../images/dashboard.jpg"; // Replace with actual image path
import dashboardHoverImg from "../../images/dashboard_hover.jpg"; // Replace with actual hover image path

export const Work = () => {
  const projects = [
    {
      title: "Food Delivery App",
      shortDescription: "Order food easily from local restaurants.",
      description: "A user-friendly app to order food from local restaurants.",
      img: foodDeliveryImg,
      hoverImg: foodDeliveryHoverImg,
    },
    {
      title: "Keep Notes",
      shortDescription: "Effortlessly manage your notes.",
      description: "An app for creating and managing notes effectively.",
      img: notesImg,
      hoverImg: notesHoverImg,
    },
    {
      title: "Weather App",
      shortDescription: "Stay updated with the latest weather.",
      description: "Real-time weather updates and forecasts.",
      img: weatherAppImg,
      hoverImg: weatherAppHoverImg,
    },
    {
      title: "Food Menu",
      shortDescription: "Interactive menu for restaurants.",
      description: "An interactive menu for restaurants showcasing dishes.",
      img: foodMenuImg,
      hoverImg: foodMenuHoverImg,
    },
    {
      title: "Dashboard",
      shortDescription: "Track your analytics and performance.",
      description: "A dashboard for tracking analytics and performance metrics.",
      img: dashboardImg,
      hoverImg: dashboardHoverImg,
    },
  ];

  return (
    <div id='work' className="work">
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src={profile} alt="" />
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <div className="work-card-img-container">
              <img src={project.img} alt={project.title} className="work-card-img default" />
              <img src={project.hoverImg} alt={project.title} className="work-card-img hover" />
            </div>
            <div className="work-card-info">
              <h2 className="work-card-title">{project.title}</h2>
              <p className="work-card-short-description">{project.shortDescription}</p>
              <p className="work-card-description">{project.description}</p>
            </div>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
};
