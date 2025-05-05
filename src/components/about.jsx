import React from 'react';
import { motion } from 'framer-motion';
import '../style/aboutCSS.css';
import profileImage from '../assets/profilePicture.jpg';

const About = () => {
  return (
    <motion.div
      className="about-container" 
    >
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Rogie Gabotero" />
        </div>

        <div className="about-text">
          <h1>Hello, I'm Rogie</h1>
          <p>
            I'm a new and passionate programmer currently exploring both front-end and back-end development.
            Through my projects, I’m learning how to build responsive and functional websites.
            My goal is to grow into a well-rounded developer by turning ideas into useful digital solutions.
          </p>

          <div className="about-buttons">
            <a href="#projects"><button className="portfolio-btn">Projects</button></a>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
