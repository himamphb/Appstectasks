import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
  render() {
    return (
    
      <div className='search-container'>
        <input type='test' value={this.props.city} onChange={this.props.handleFunc} onFocus={this.props.clearData}/>
        <button onClick={this.props.func}>Search</button>
      </div>
      
    )
  }
}
