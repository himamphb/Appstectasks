import React, { Component } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import { withStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import ReplySection from "./ReplySection";


export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeClick: false,
      disLikeClick: false,
      likeCount: 0,
      replyDiv : false
    };
  }
  handleToggleLikeUp = (e) => {
    let {likeCount, likeClick} = this.state
    console.log(e.target);
    if(e.target.id === "increase"){
      this.setState({
        likeCount : likeClick + 1
      })
    }
     else {
      if(likeCount > 0){
        this.setState({
          likeCount : likeClick - 1
        })
      }
    }
    this.setState({
      likeClick: !likeClick,
      disLikeClick: false,
     
    });
  
  };
  handleToggleDisLike = () => {
    const { likeCount, disLikeClick } = this.state;
    this.setState({
      disLikeClick: !disLikeClick,
      likeClick: false,
    });
    if (likeCount > 0) {
      this.setState({
        likeCount: likeCount - 1,
      });
    }
  };

  handleReply = () => {
    this.setState({replyDiv : true})
  }
  render() {
    const { likeClick, disLikeClick, likeCount, replyDiv } = this.state;
    return (
      <div className="commentContent">
        <Avatar src={this.props.src} />
        <div className="ListContentwithLike">
          <p>{this.props.user}</p>
          <p>{this.props.comment}</p>
          <div className="inlineElements">
            {likeClick ?
              <ThumbUpAltIcon className="pointerIcon" id="decrease" onClick={(e) => {this.handleToggleLikeUp(e)}}/>
             : (
              <ThumbUpAltOutlinedIcon className="pointerIcon" id="increase" onClick={(e) => {this.handleToggleLikeUp(e)}} />
            )}
            {likeCount}
            {disLikeClick ? (
              <ThumbDownIcon className="pointerIcon" onClick={this.handleToggleDisLike} />
            ) : (
              <ThumbDownAltOutlinedIcon className="pointerIcon" onClick={this.handleToggleDisLike} />
            )}
            <p id="pElement" onClick={this.handleReply}>Reply</p>
            {replyDiv ? <ReplySection/> : null}
          </div>
        </div>
      </div>
    );
  }
}
