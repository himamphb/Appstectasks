import React, { Component } from "react";
import ArrayTask from "../ArrayTask/ArrayTask";

export default class Array extends Component {
  constructor() {
    super();
    this.state = {
      language: [
        { courser: "html", year: 1993, authour: "Tim Berners" },
        { courser: "css", year: 1996, authour: "HÃ¥kon Wium Lie" },
        { courser: "javascript", year: 1995, authour: "Brendan Eich" },
      ],
    };
  }
  render() {
    let element = this.state.language.map((ele, index) => {
      return (
        <ArrayTask
          key={index}
          name={ele.courser}
          year={ele.year}
          authourName={ele.authour}
        />
      );
    });
    return <div>{element}</div>;
  }
}
