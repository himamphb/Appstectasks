import React, { Component } from "react";
const HigherOC = (OriginalComponent) => {
  class HigherOrderCom extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    handleClicked = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            func={this.handleClicked}
            {...this.props}
          />
        </div>
      );
    }
  }
  return HigherOrderCom;
};
export default HigherOC;
