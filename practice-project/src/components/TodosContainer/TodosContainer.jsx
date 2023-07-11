import React, { Component } from 'react'
import './TodosContainer.scss'
class TodosContainer extends Component {
  render() {
    return (
      <div className='todos-content'>
        <ul>
        <li>{this.props.name}</li>
        <li>{this.props.date}</li>
        <li><input type="checkbox"/></li>
        <li><button>Delete</button></li>
      </ul>
      </div>
      
    )
  }
}

export default TodosContainer