import React, { Component } from "react";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import Button from "@material-ui/core/Button";
import "./ReplySection.scss";
// import { Avatar } from "@material-ui/core";

export default class extends Component {
  render() {
    return (
      <>
        <div className="replyInput">
          <input type="text" placeholder="Add comment..." />
        </div>
        <div className="replyDrop-container">
          <EmojiEmotionsOutlinedIcon />
          <div className="replyDrop-buttons">
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
          
            <Button variant="contained" color="secondary">
              Reply
            </Button>
          </div>
        </div>
      </>
    );
  }
}
