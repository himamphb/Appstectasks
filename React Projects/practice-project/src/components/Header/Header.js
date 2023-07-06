import React, { Component } from "react";
import './Header.css';
import Search from "../Search/Search";

export default class Header extends Component {
  render() {
    return(
      <>
        <div className="container">
          <h3>Design Lab</h3>
          <Search/>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Feature</li>
          </ul>
          </div>
      </>
    )
  }
}
