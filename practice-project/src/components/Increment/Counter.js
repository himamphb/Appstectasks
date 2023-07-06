import React, { Component } from "react";


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount(){
    console.log("componentDidMount success");
  }
  handleIncrement = () => {
  
    this.setState((val) => ({
      count : val.count + 1
    }));
  };

  componentDidUpdate(preProps,preState){
    if(preState.count !== this.state.count){
      console.log(`${this.state.count} componentDidUpdate success `);
    }
  }
  shouldComponentUpdate(nextprops,state){
    if(state.count <  -10 || state.count > 10){
      return false
    }
    return true
  }
  handleDecrement = () => {
    
    this.setState((val) => ({
      count: val.count - 1
    }));
  };
  render() {
    // const { count } = this.state;
    return (
      <div>
        <h1>Counter App</h1>
        <h3>timer:{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
