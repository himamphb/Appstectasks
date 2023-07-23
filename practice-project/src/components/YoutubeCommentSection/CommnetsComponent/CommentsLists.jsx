import React, { Component } from "react";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

export default class extends Component {
  render() {
    return (
      <div className="commentContent">
          <div>
            <img src={this.props.src} alt="img" />
          </div>
          <div className="ListContentwithLike">
            <p>{this.props.user}</p>
            <p>{this.props.comment}</p>
            <ThumbUpAltOutlinedIcon style={{marginTop:"10px",marginRight:"10px"}}/>
            <ThumbDownAltOutlinedIcon style={{marginTop:"10px",marginLeft:"10px"}}/>
            <p>Reply</p>
          </div>
        
      </div>
    );
  }
}
