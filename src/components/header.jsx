import React from 'react';
import { Link } from 'react-router-dom';
import '../style/headerCSS.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">My Portfolio</div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
