import React, { Component } from "react";
import "./Material.scss";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class Material extends Component {
  render() {
    return (
      <div className="contianer">
        <div className="header-container">
          <Container maxWidth="sm">
            <Typography variant="h6" style={{ color: '#e8e9eb' }}>
              Hello,
            </Typography>
            <Typography variant="h5" style={{ color: '#eceef0' }}>
              Himam Basha
            </Typography>
          </Container>
          
            <img src="images.jpg" alt="employee image" />
          
        </div>
        <div className="block-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ratione nam nostrum quas atque dolor explicabo sit aut quo. Quasi ut officia repudiandae. Excepturi tenetur voluptatem iusto debitis voluptas illo.
          </p>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Type to search...."/>
        </div>
        <div className="content-container">
          <p>Last seen objects</p>
          <p>see all</p>
          </div>
      </div>
    );
  }
}
