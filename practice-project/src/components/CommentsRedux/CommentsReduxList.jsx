import React, { Component } from "react";
import { connect } from "react-redux";
import ReplyComponent from "./ReplyComponent";
import { deleteComment, deleteParentComment } from "../../redux/action";
import ChildReplyRedux from "./ChildReplyRedux";

class CommentsReduxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: false,
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
  handleBooleanValue = () => {
    this.setState({
      reply : false
    })
  }
  render() {
    return (
      <>
        <div>
          {this.props.comments.map((element,index) => (
            <div key={element.id}>
              <p>{element.userInput}</p>
              <button onClick={() => this.handleChildReply(element.id)}>Reply</button>
              <button
                onClick={() => {
                  this.handleDelete(element.id);
                }}
              >
                Delete
              </button>
              {/* <ReplyComponent idVal = {element.id} funBoolean = {this.handleBooleanValue}/> */}
              <ChildReplyRedux  keyIndex = {index}/>
            
            </div>
            
          ))}
          

          
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
