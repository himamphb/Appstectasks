import React, { Component } from "react";

import Navbar from "./components/Navigation/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import PackageLib from "./components/NpmPackagesLibraries/PackageLib";
// import Navbar from "./components/Navigation/Navbar";
// import Number from "./components/NumberGen/Number";
// import Array from "./components/Array/Array";
// import ButtonsTask1 from "./components/ButtonsTask/ButtonsTask1";
// import ButtonTask2 from "./components/ButtonTask2/ButtonTask2";
// import Api from "./components/API/Api";
// import ImageApi from "./components/ImageApi/ImageApi";
// import Todos from "./components/TodosTask/Todos";
// import Todolist from "./components/Todolist/Todolist";
// import SingleComp from "./components/FunctionComponent/SingleComp";
// import Btheader from "./components/Bootstrap-Header/Btheader";
// import Contact from "./components/Contact/Contact";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Counter from "./components/Increment/Counter";

export default class App extends Component {
  render() {
    return (
      
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/gallery" Component={Gallery}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
    </BrowserRouter>
    
    );
  }
}



    
// const nameArr = [
    //   { id:1,user: "Mark Zuckerberg", number: 9951941987 },
      
    // ];