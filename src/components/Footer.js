import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer mt-36">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.github.com/rohitnirban" target='_blank' rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/rohitnirban" target='_blank' rel="noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link font-bold" href="#home">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link font-bold" href="#skills">
            Skills
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link font-bold" href="#projects">
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link font-bold" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 Rohit Yadav | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
