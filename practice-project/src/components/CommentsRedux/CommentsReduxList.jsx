import React, { Component } from "react";
import { connect } from "react-redux";
import ReplyComponent from "./ReplyComponent";
import { deleteComment, deleteParentComment } from "../../redux/action";

class CommentsReduxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: false,
      childReply: false,
      replyChildData: "",
    };
  }
  handleChildReply = () => {
    this.setState({
      reply: true,
    });
  };
  handleDeleteChild = (id) => {
    this.props.deleteComment(id);
  };
  handleDelete = (id) => {
    this.props.deleteParentComment(id);
  };
  replychild = () => {
    this.setState({
      childReply: true,
    });
  };

  render() {
    return (
      <>
        <div>
          {this.props.comments.map((element) => (
            <div key={element.id}>
              <p>{element.userInput}</p>
              <button onClick={this.handleChildReply}>Reply</button>
              <button
                onClick={() => {
                  this.handleDelete(element.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
          {this.state.reply ? <ReplyComponent /> : null}

          <ul>
            {this.props.childCommentsArray.map((obj) => (
              <li key={obj.id}>
                <div>
                  <p>{obj.comment}</p>
                  <button onClick={this.replychild}>Reply</button>
                  <button
                    onClick={() => {
                      this.handleDeleteChild(obj.id);
                    }}
                  >
                    Delete
                  </button>
                </div>

                {this.state.childReply ? <ReplyComponent /> : null}
                
                <ul>
                  {this.props.nestesChildArray.map((obj) => (
                    <li key={obj.id}>
                      <div>
                        <p>{obj.comment}</p>
                        <button onClick={this.replychild}>Reply</button>
                        <button
                          onClick={() => {
                            this.handleDeleteChild(obj.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
const storeData = (state) => ({
  comments: state.comments,
  childCommentsArray: state.childCommentsArray,
  nestesChildArray: state.nestesChildArray,
});
export default connect(storeData, { deleteComment, deleteParentComment })(
  CommentsReduxList
);
