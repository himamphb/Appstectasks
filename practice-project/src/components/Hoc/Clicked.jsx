import React, { Component } from 'react'
import HigherOC from './HigherOrderCom'

 class Clicked extends Component {
  render() {
    return (
      <button onClick={this.props.func}>clicked  {this.props.propName}{this.props.count} times</button>
    )
  }
}
export default HigherOC(Clicked);