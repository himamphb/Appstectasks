import React, { Component } from "react";
import "./CommentsPart.scss";
import SortIcon from "@material-ui/icons/Sort";
import CommentsLists from "./CommentsLists";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

export default class CommentsPart extends Component {
  constructor() {
    super();
    this.state = {
      listArray: [
        {
          user: "@rajshekar",
          src: "person2.jpg",
          comment: "It will be good movie ,waiting to watch in theater",
        },
        {
          user: "@nirushetty",
          src: "person3.jpg",
          comment: "waiting for the movie...😍",
        },
        {
          user: "@praveenkr12",
          src: "person4.jpg",
          comment: "Nolan movies are the best",
        },
        {
          user: "@vinaykumar99",
          src: "person5.jpg",
          comment: "Nolan fans assemble here....✌️",
        },
      ],
      comment: "",
      count: 5,
    };
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  addComments = () => {
    if (this.state.comment !== "") {
      console.log("if");
      const obj = {
        user: "@himamphb124",
        src: "person1.jpg",
        comment: this.state.comment,
      };
      const newArray = [obj, ...this.state.listArray];
      console.log(newArray);
      this.setState({
        listArray: newArray,
        count: this.state.count + 1,
        comment: "",
      });
    } else {
      return alert("enter the comment");
    }
  };

  render() {
    return (
      <div className="comments-container">
        <div className="sortSection">
          <div>{this.state.count} comments</div>
          <div className="sortDiv">
            <SortIcon />
            Sort by
          </div>
        </div>
        <div className="addComment">
          <div className="imageDiv">
            <Avatar src="person1.jpg" />
          </div>
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Add comment..."
              onChange={this.handleChange}
              value={this.state.comment}
            />
          </div>
          {/* <Button variant="contained" onClick={this.addComments} color="error">Add</Button> */}
          <button onClick={this.addComments}>Add comment</button>
        </div>
        <div className="commentsLists">
          {this.state.listArray.map((element) => {
            return (
              <CommentsLists
                src={element.src}
                comment={element.comment}
                user={element.user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
