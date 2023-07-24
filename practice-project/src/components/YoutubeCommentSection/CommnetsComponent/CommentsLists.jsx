import React, { Component } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
// import { withStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";

export default class extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="commentContent">
        <Avatar src={this.props.src} />
        <div className="ListContentwithLike">
          <p>{this.props.user}</p>
          <p>{this.props.comment}</p>
          <div className="inlineElements">
            <ThumbUpAltOutlinedIcon />
            <ThumbDownAltOutlinedIcon />
            <p>Reply</p>
          </div>
        </div>
      </div>
    );
  }
}
