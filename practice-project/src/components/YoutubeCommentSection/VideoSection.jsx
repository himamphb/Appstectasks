import React, { Component } from "react";
import "./VideoSection.scss";

export default class VideoSection extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/uYPbbksJxIg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
