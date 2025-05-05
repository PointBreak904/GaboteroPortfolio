import React, { useState } from 'react';
import '../style/skillsCSS.css';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';
import react from '../assets/react.svg';
import xml from '../assets/xml.svg';
import kotlin from '../assets/kotlin.png';
import mysql from '../assets/mysql.png';
import python from '../assets/python.svg';
import php from '../assets/php.svg';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-category">
        <h3>Frontend Development</h3>
        <div className="skills-grid">
          <SkillCard icon={htmlIcon} level={5} />
          <SkillCard icon={cssIcon} level={4} />
          <SkillCard icon={jsIcon} level={4} />
          <SkillCard icon={react} level={4} />
          <SkillCard icon={xml} level={3} />
          <SkillCard icon={kotlin}level={3} />
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend Development</h3>
        <div className="skills-grid">
          <SkillCard icon={php}  level={4} />
          <SkillCard icon={python} level={3} />
          <SkillCard icon={mysql} level={4} />
        </div>
      </div>

      <div className="skills-category">
        <h3>Version Control & Collaboration</h3>
        <div className="skills-grid">
          <SkillCard icon={gitIcon} level={4} />
          <SkillCard icon={githubIcon} level={4} />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, label, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const shouldShow = isOpen || isHovered; // if either is true, show details

  return (
    <div className="skill-card">
      <div
        className="skill-icon-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`skill-details ${shouldShow ? 'open' : ''}`}>
          <div className="skill-bar">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`bar-segment ${i < level ? 'filled' : 'empty'}`}
              ></div>
            ))}
          </div>
          <p className="skill-level-text">
            {level === 5
              ? 'EXPERT'
              : level === 4
              ? 'ADVANCED'
              : level === 3
              ? 'INTERMEDIATE'
              : 'BEGINNER'}
          </p>
        </div>

        <div className="skill-icon" onClick={handleClick}>
          <img src={icon} alt={label} />
        </div>
      </div>
      <p className="skill-label">{label}</p>
    </div>
  );
};

export default Skills;
