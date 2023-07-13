import React, { Component } from 'react'
import Slider from 'react-slick'

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
      <div>
        <Slider {...settings}>
            <div></div>
            <div></div>
            <div></div>
        </Slider>
      </div>
      </>
    )
  }
}
