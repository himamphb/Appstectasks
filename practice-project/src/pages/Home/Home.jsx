import React, { Component } from "react";
import "./Home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };
    return (
      <>
        <div className="image-container">
          <Slider
            {...settings}
          >
            <div className="slider-component"><img src="image1.jpg" alt="image" /></div>
            <div className="slider-component"><img src="image2.jpg" alt="image"/></div>
            <div className="slider-component"><img src="image3.jpg" alt="image"/></div>
            <div className="slider-component"><img src="image4.jpg" alt="image"/></div>
            <div className="slider-component"><img src="image5.jpg" alt="image"/></div>
          </Slider>
        </div>
      </> 
    );
  }
}



