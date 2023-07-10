import React, { Component } from "react";
import "./Image.scss";

export default class Image extends Component {
  render() {
    return (
      <div className="imageDiv">
        <img src={this.props.link} alt="image" />
      </div>
    );
  }
}
