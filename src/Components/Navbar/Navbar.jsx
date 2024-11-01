import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo (2).jpg';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="nikita" />
      <ul className="nav-menu">
        <li>
          <a 
            href="#home" 
            className={`anchor-link ${menu === "home" ? "active" : ""}`} 
            onClick={() => setMenu("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={`anchor-link ${menu === "about" ? "active" : ""}`} 
            onClick={() => setMenu("about")}
          >
            About me
          </a>
        </li>
        <li>
          <a 
            href="#work" 
            className={`anchor-link ${menu === "portfolio" ? "active" : ""}`} 
            onClick={() => setMenu("portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`anchor-link ${menu === "contact" ? "active" : ""}`} 
            onClick={() => setMenu("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
     <a href="https://www.linkedin.com/in/nikita-kumawat-976b7828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <div className="nav-connect">
        Connect
      </div></a> 
    </div>
  );
}
