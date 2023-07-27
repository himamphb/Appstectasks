import React, { Component } from "react";
import { connect } from "react-redux";
import { replyComment } from "../../redux/action";
class ReplyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      replyInput: "",
      reply : true
    };
  }

  handleChangeReply = (e) => {
    this.setState({
      replyInput: e.target.value,
    });
  };
  handleReplySubmit = (e) => {
    e.preventDefault();
    const replyObj = {
      id: Date.now(),
      comment: this.state.replyInput,
    };
    this.props.replyComment(replyObj);
    this.setState({
        reply : false,replyInput : ""
    })
  };
  render() {
    return (
      <>
      {
        this.state.reply ? <div>
        <form>
          <input
            type="text"
            name="userReply"
            value={this.state.replyInput}
            onChange={this.handleChangeReply}
          />
          <button type="submit" onClick={this.handleReplySubmit}>
            submit
          </button>
        </form>
      </div> : null
      }
      </>
    
    );
  }
}
export default connect(null, { replyComment })(ReplyComponent);