import React, { Component } from "react";
import Btheader from "./components/Bootstrap-Header/Btheader";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Increment/Counter";

export default class App extends Component {
  render() {
    const nameArr = [
      { id:1,user: "Mark Zuckerberg", number: 9951941987 },
      
    ];
    return (
      <>
        <div>
          {/* <Counter/> */}
          {/* <Footer/> */}
          {/* <Header/> */}
         {/* <Btheader/> */}
          <Contact data={nameArr} />
        </div>
      </>
    );
  }
}
