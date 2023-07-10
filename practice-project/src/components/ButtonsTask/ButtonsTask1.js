import React, { Component } from 'react'

export default class ButtonsTask1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : ""
        }
    }
    buttonOne = () => {
        this.setState({text:"button1"})
    }
  render() {
    return (
      <>
      <div>
        
        <button onClick={() => this.()}>Button1</button>
        <button onClick={}>Button2</button>
        <button onClick={}>Button2</button>
        <button onClick={}>Button2</button>
      </div>
      <p>{this.state.text}</p>
      </>
    )
  }
}
