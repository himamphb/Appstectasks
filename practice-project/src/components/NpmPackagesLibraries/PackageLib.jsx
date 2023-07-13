import React, { Component } from "react";
import "./PackageLib.scss";
import DotLoader from "react-spinners/DotLoader";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default class PackageLib extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      selectedOption: null,
    };
  }

  handleChange = (val) => {
    console.log(val);

    this.setState({
      selectedOption: val,
    });
  };
  render() {
    const { selectedOption } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="container">
          <div child-1>
            <DotLoader color="#36d7b7" />
          </div>
          <div className="child-2">
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              placeholder="select your icecream"
              isMulti
              isSearchable
              noOptionsMessage={() => "Not found"}
            />
          </div>
          <div className="child-3">
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Slider>
          </div>
          <br /><br />
          <div className="child-4">
             <AwesomeButton type="facebook">Facebook</AwesomeButton>
             <AwesomeButton type="twitter">Twitter</AwesomeButton>
             <AwesomeButton type="linkedin">LinkedIn</AwesomeButton>
             <AwesomeButton type="messenger">Messenger</AwesomeButton>
             <AwesomeButton type="whatsapp">Whatsapp</AwesomeButton>
          </div>
          <br /><br />
          <div className="child-5">
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </div>
         
        </div>   
    </>
    );
  }
}
