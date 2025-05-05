import React from 'react';
import { Link } from 'react-router-dom';
import '../style/headerCSS.css';

const Header = ({ bg }) => {
  return (
    <header className={`header ${bg}`}>
      <div className="logo">My Portfolio</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home" >Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
