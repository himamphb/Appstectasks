import React, { Component } from "react";
import "./Number.scss";


export default class Number extends Component {
  constructor() {
    super();
    this.state = {
      registeredNumbers: [
        9085627862, 9022991176, 9011795557, 9085293351, 9061195687, 9060266755,
        9053530445, 9381721667, 9088433572, 9951941987,
      ],
      userNumber: "",
      isAvalibity: false,
      isCLicked: false,
      showCheckBtn : false,
      value : "",
      date : ""
    };
  }

  handleChange = (e) => {
    let eleValue = e.target.value;
    let number = parseInt(eleValue);
    // (eleValue.length <= 10) ? this.setState({userNumber: number}) : null;
    if(eleValue.length <= 10) this.setState({userNumber: number});
    if(eleValue.length === 10) this.setState({showCheckBtn : true});
  };

  generateNumber = () => {
    const randomNumber = Math.floor(9000000000 + Math.random() * 100000000);
    this.setState({userNumber: randomNumber,showCheckBtn : true,isCLicked :false});
  };

  checkNumber = () => {
    const { userNumber, registeredNumbers } = this.state;
    const validNumber = registeredNumbers.includes(userNumber);
    this.setState({ isCLicked: true });
    (validNumber) ? this.setState({ isAvalibity: false }) : this.setState({ isAvalibity: true });
  };

  clearMessage = () =>{
    this.setState({isCLicked : false,showCheckBtn : false})
  }

  setPhoneNumber = (val) => {
    this.setState({
      value : val
    })
  }

setStartDate = (val) => {
  this.setState({
    date : val
  })
}

  render() {
    const { userNumber, showCheckBtn, isCLicked, isAvalibity,value, date } = this.state;
    
    return (
      <>
        <div className="container">
          <input
            type="number"
            value={userNumber} onChange={this.handleChange} onFocus={this.clearMessage}/>
          <button type="button" onClick={this.generateNumber}>Generate number</button>
        </div>
        <div className="child-container">
          {showCheckBtn ? (<div><button onClick={this.checkNumber}>check avalability of number</button></div>) : null}
          {isCLicked ? (isAvalibity ? (<h3> {userNumber} is valid</h3>) : (<h3>{userNumber} is already registered</h3>)) : null}
        </div>
        <div>
          
          <h3>{value}</h3>
        </div>
      </>
    );
  }
}
