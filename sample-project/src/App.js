
import './App.css';

import React, { Component } from 'react'
import ContactRedux from './Components/ContactManger/ContactRedux';
import { store } from './redux/store';
import { Provider } from "react-redux"
import ContactReduxLists from './Components/ContactManger/ContactReduxLists';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactRedux/>
        <ContactReduxLists/>
      </Provider>
    )
  }
}

