import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../style/heroCSS.css'
import profile from '../assets/profile.png'
import DotWave from '../components/DotWave'; // make sure the path is correct

export class hero extends Component {
  render() {
    return (
      <motion.div>
        <div className='body'>
          
          {/* Background wave animation */}
          <DotWave />
          <div className='hero_content'>
          <div className='div_top'>
            <h1>Hi! I am Rogie Gabotero</h1>
            <p>Aspiring Full-Stack Developer</p>
            <a href="#about">
              <button className='moreBtn'>Get to Know me More</button>
            </a>
          </div>

          <div className='div_bot'>
            <img className='profile_pic' src={profile} alt="Profile" />
          </div>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default hero
