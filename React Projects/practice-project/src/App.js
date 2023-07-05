import React, { Component } from "react";
import Contact from "./components/Contact/Contact";

export default class App extends Component {
  render() {
    const nameArr = [
      { user: "Mark Zuckerberg", number: 9951941987 },
      
    ];
    return (
      <>
        <div>
          <Contact data={nameArr} />
        </div>
      </>
    );
  }
}
