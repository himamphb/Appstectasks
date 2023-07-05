import React, { Component } from "react";
import Counter from "./components/Increment/Counter";
import Decrement from "./components/Decrement/Decrement";

export default class App extends Component {
  render() {
    return <>
    <div>
      <Counter/>
    </div>
    {/* <Decrement/> */}
    </>;
  }
}
