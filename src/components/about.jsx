import React from 'react';
import { motion } from 'framer-motion';
import '../style/aboutCSS.css';
import profileImage from '../assets/profilePicture.jpg';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: 100 }}   
      animate={{ opacity: 1, x: 0 }}     
      exit={{ opacity: 0, x: -100 }}    
      transition={{ duration: 0.5 }}    
    >
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Rogie Gabotero" />
        </div>

        <div className="about-text">
          <h1>Hello, I'm Rogie</h1>
          <p>
            I'm a passionate <strong>Graphic Designer</strong> with <strong>3 years</strong> of experience
            specializing in branding, logo design, and digital design. My mission is
            to create visually stunning and user-friendly experiences that leave a lasting impression.
          </p>

          <h2>My Expertise</h2>
          <ul className="skills-list"></ul>

          <div className="about-buttons">
            <button className="portfolio-btn">View Projects</button>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
