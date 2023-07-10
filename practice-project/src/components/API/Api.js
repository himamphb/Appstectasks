import React, { Component } from 'react'

export default class Api extends Component {
    constructor(){
        super();
        this.state = {
            quote : ""
        }
    }
    componentDidMount () {
       this.generateQuote()
    }
    generateQuote = async () => {
    let response = await fetch("https://api.quotable.io/random");
        let responseData = await response.json();
        this.setState({
            quote:responseData.content
        })
   }
    
  render() {
    return (
        <>
        <div>Api content</div>
        <div>{this.state.quote}</div>
        <div>
            <button onClick={this.generateQuote}>generate quote</button>
        </div>
        </>
      
    )
  }
}
