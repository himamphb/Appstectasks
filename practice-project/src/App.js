import React, { Component } from "react";
// import ButtonsTask1 from "./components/ButtonsTask/ButtonsTask1";
// import ButtonTask2 from "./components/ButtonTask2/ButtonTask2";
// import Api from "./components/API/Api";
// import ImageApi from "./components/ImageApi/ImageApi";
import Todos from "./components/TodosTask/Todos";
// import Todolist from "./components/Todolist/Todolist";
// import SingleComp from "./components/FunctionComponent/SingleComp";
// import Btheader from "./components/Bootstrap-Header/Btheader";
// import Contact from "./components/Contact/Contact";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Counter from "./components/Increment/Counter";

export default class App extends Component {
  render() {
    // const nameArr = [
    //   { id:1,user: "Mark Zuckerberg", number: 9951941987 },
      
    // ];
    return (
      <>
        <div>
          <Todos/>
          {/* <ImageApi/> */}
          {/* <Api/> */}
          {/* <ButtonsTask1/>
          <ButtonTask2/> */}
          {/* <Todolist/> */}
          {/* <Counter/> */}
          {/* <Footer/> */}
          {/* <Header/> */}
         {/* <Btheader/> */}
          {/* <Contact data={nameArr} /> */}
          {/* <SingleComp/> */}
        
        </div>
      </>
    );
  }
}
