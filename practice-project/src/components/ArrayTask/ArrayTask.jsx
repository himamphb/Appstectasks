import React, { Component } from 'react'

export default class ArrayTask extends Component {
  render() {
    return (
      
        <p>{this.props.name} was developed by{this.props.authourName} in {this.props.year}</p>
    
    )
  }
}
