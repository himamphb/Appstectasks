import React, { Component } from 'react'
import ReplyComponent from './ReplyComponent';
import { connect } from 'react-redux';

class ChildReplyRedux extends Component {
  render() {
    return (
      <div>
        {this.props.comments[this.props.keyIndex].reply.map((element) => (
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
              <ReplyComponent idVal = {element.id} />
            
            </div>
            
          ))}
      </div>
    )
  }
}

const storeData = (state) => (
    {
        comments : state.comments
    }
)
export default connect(storeData,)(
    ChildReplyRedux
  );
  