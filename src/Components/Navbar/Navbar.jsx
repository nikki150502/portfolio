import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo (2).jpg';
import underline from '../../images/underline.jpg';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="nikita" />
      <ul className="nav-menu">
        <li>
          <a href="#home" className='anchor-link' onClick={() => setMenu("home")}>
            Home
          </a>
          {menu === "home" && <img src={underline} alt="" className="underline" />}
        </li>
        <li>
          <a href="#about" className='anchor-link' onClick={() => setMenu("about")}>
            About me
          </a>
          {menu === "about" && <img src={underline} alt="" className="underline" />}
        </li>
        <li>
          <a href="#work" className='anchor-link' onClick={() => setMenu("portfolio")}>
            Portfolio
          </a>
          {menu === "portfolio" && <img src={underline} alt="" className="underline" />}
        </li>
        <li>
          <a href="#contact" className='anchor-link' onClick={() => setMenu("contact")}>
            Contact
          </a>
          {menu === "contact" && <img src={underline} alt="" className="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        Connect With me
      </div>
    </div>
  );
}
