import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/headerCSS.css';

const Header = ({ bg }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${bg}`}>
      <div className="logo">My Portfolio</div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list" onClick={closeMenu}>
          <li><a href="#home" >Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blogs</a></li>
          <li><a href="#contacts">Contact</a></li>
        </ul>
      </nav>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
