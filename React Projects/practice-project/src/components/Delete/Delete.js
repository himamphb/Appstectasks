import React, { Component } from 'react'
import './Delete.css'

export default class Delete extends Component {

      componentWillUnmount(){
        console.log("componentWillUnmount success");
      }
  render() {
    return (
      <div className='list-container'>
      <ul>
      <li>{this.props.propsName}</li>
      <li>{this.props.propsNum}</li>
      <li><button onClick={() => {this.props.funCall(this.props.keyId)}}>Delete user</button></li>
      </ul>
      
      </div>
    )
  }
}
