import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, replyComment } from "../../redux/action";

class CommentsRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      
    };
  }
  handleChange = (e) => {
    
    this.setState({
      inputValue: e.target.value,
    });

  };
  

  handleSubmit = (e) => {
    
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      userInput: this.state.inputValue,
      reply: []
    };
    this.props.addComment(newComment);
    
    this.setState( {
        inputValue:"",
    })
  };

  
  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={inputValue}
            name="inputValue"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            submit
          </button>
         
        </form>
      </div>
    );
  }
}
export default connect(null, { addComment, replyComment })(CommentsRedux);
