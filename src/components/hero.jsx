import React, { Component } from 'react'
import '../style/heroCSS.css'

export class hero extends Component {
  render() {
    return (
      <>
        <div className='body'>
          <div>
            <h1>Hi! I am Rogie Gabotero</h1>
            <p>Professional Graphic Designer</p>
          </div>
          <button className='moreBtn'>
            Get to Know me More
          </button>
        </div>
      </>
    )
  }
}

export default hero