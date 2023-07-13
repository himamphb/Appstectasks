import React, { Component } from 'react'
import './Home.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
      <>
      < div className='image-container'>
        <Slider className='slider-component' {...settings}>
            <img src="image1.jpg" alt="image" />
            <img src="image2.jpg" alt="image" />
            <img src="image3.jpg" alt="image" />
            <img src="image4.jpg" alt="image" />
            <img src="image5.jpg" alt="image" />
        </Slider>
      </div>
      </>
    )
  }
}
