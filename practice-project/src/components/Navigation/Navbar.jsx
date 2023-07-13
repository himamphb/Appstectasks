import React, { Component } from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
     <>
     <nav className='nav-container'>
            <ul>
                <li><Link to="/" exact>NavBar</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
     </nav>
     </>
    )
  }
}
