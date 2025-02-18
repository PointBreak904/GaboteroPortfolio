import React, { Component } from 'react'
import { motion } from 'framer-motion';
import '../style/heroCSS.css'

export class hero extends Component {
  render() {
    return (
      
      <motion.div
      className="hero-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
        <div className='body'>
          <div>
            <h1>Hi! I am Rogie Gabotero</h1>
            <p>Professional Graphic Designer</p>
          </div>
          <button className='moreBtn'>
            Get to Know me More 
          </button>
        </div>
      </motion.div>
    )
  }
}

export default hero