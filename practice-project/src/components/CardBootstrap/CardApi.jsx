import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../Search/Search";
import "./CardApi.scss";

export default class CardApi extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      location: "",
      tempC: "",
      tempF: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  inputDataCall = async () => {
    if (this.state.city.length === 0) {
      alert("enter the city");
    } 
    else {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=cefa0eed15614393a5a64819231707&q=${this.state.city}&aqi=yes`
      );
      let responseData = await response.json();
      console.log(responseData);      
      this.setState({
        location: responseData.location.name,                                               
        tempC: responseData.current.temp_c,
        tempF: responseData.current.temp_f,
      });
    }
  };
  clearDataFunc = () => {
    this.setState({
      location: "",
      tempC: "",
      tempF: ''
    });
  };
  componentDidUpdate(prevProps,prevState){
    
    console.log(prevState);
  }
  render() {
    return (
      <div className="weather-container">
        <Search
          func={this.inputDataCall}
          city={this.state.city}
          handleFunc={this.handleChange}
          clearData={this.clearDataFunc}
        />
        <Card style={{ width: "20rem",marginTop:"2rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>city : {this.state.location}</ListGroup.Item>
            <ListGroup.Item>temparature in celsius : {this.state.tempC}</ListGroup.Item>
            <ListGroup.Item>temparature in Farenheit : {this.state.tempF}</ListGroup.Item>  
          </ListGroup>
        </Card>
      </div>
    );
  }
}
