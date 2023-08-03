import "./App.css";

import React, { Component } from "react";
// import AxiosPost from './Components/AxiosApi/AxiosPost';
import FormAxios from "./Components/FormAxios/FormAxios";
// import Api from './Components/AxiosApi/Api';
// import Filteration from './Components/AxiosApi/Filteration';
// import ContactRedux from './Components/ContactManger/ContactRedux';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll";
import Todo from "./Components/Todo/Todo";
// import ContactReduxLists from './Components/ContactManger/ContactReduxLists';

export default class App extends Component {
  render() {
    return (
      <>
      <Todo/>
      </>
    );
  }
}
