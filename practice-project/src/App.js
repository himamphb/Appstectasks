import React, { Component } from "react";
import Material from "./components/Material-UI/Material";
// import {
//   CheckBoxWrapper,
//   DdOptionWrapper,
//   DdSelectWrapper,
//   DivWrapper,
//   FormWrapper,
//   GlobalStyle,
//   StyledButton,
//   StyledLabel,
//   TextArea,
// } from "./components/Styled/Form.styled";
// import FaqPage from "./components/FaqPageTask/FaqPage";

// import Navbar from "./components/Navigation/Navbar";
// import About from "./pages/About/About";
// import Home from "./pages/Home/Home";
// import Gallery from "./pages/Gallery/Gallery";
// import Contact from "./pages/Contact/Contact";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

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

// const lightTheme = {
//   body: '#f1f1f1',
//   text: '#121620'
// };

// const darkTheme = {
//   body: '#121620',
//   text: '#f1f1f1'
// };

export default class App extends Component {
  render() {
    return (
      <div>
        <Material/>
      </div>
      // <DivWrapper>
      //   <GlobalStyle/>
      //   <FormWrapper type="text" placeholder="enter the text" />
      //   <FormWrapper type="email" placeholder="enter the email" />
      //   <FormWrapper type="password" placeholder="enter the password" />
      //   <FormWrapper type="number" placeholder="enter the number" />
      //   <FormWrapper type="date"></FormWrapper>
      //   <CheckBoxWrapper>
      //     <FormWrapper type="checkbox" />
      //     <StyledLabel>HTML</StyledLabel>
      //     <FormWrapper type="checkbox" />
      //     <StyledLabel>CSS</StyledLabel>
      //     <FormWrapper type="checkbox" />
      //     <StyledLabel>JS</StyledLabel>
      //   </CheckBoxWrapper>

      //   <CheckBoxWrapper>
      //     <FormWrapper type="radio" />
      //     <StyledLabel>React</StyledLabel>
      //     <FormWrapper type="radio" />
      //     <StyledLabel>Angular</StyledLabel>
      //     <FormWrapper type="radio" />
      //     <StyledLabel>Vue</StyledLabel>
      //   </CheckBoxWrapper>

      //   <CheckBoxWrapper>
      //     <StyledLabel>Experience</StyledLabel>
      //     <DdSelectWrapper>
      //       <DdOptionWrapper>0</DdOptionWrapper>
      //       <DdOptionWrapper>1</DdOptionWrapper>
      //       <DdOptionWrapper>2</DdOptionWrapper>
      //       <DdOptionWrapper>3</DdOptionWrapper>
      //       <DdOptionWrapper>4</DdOptionWrapper>
      //       <DdOptionWrapper>5</DdOptionWrapper>
      //     </DdSelectWrapper>
      //   </CheckBoxWrapper>

      //   <TextArea  rows="4" cols="50">Enter the text..🙂</TextArea>
      //   <StyledButton>Submit</StyledButton>
      // </DivWrapper>
    );
  }
}

// const nameArr = [
//   { id:1,user: "Mark Zuckerberg", number: 9951941987 },

// ];

// <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route path="/" Component={Home}/>
//     <Route path="/about" Component={About}/>
//     <Route path="/gallery" Component={Gallery}/>
//     <Route path="/contact" Component={Contact}/>
//   </Routes>
// </BrowserRouter>
