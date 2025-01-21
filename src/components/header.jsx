import React, { Component } from 'react'
import '../style/headerCSS.css'

export class header extends Component {
  render() {
    return (
     <>
      <header className="header">
            <div className="logo">My Portfolio</div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
     </>
    )
  }
}

export default header