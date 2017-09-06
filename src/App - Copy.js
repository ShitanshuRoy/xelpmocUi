import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import ListHeader from "./components/ListHeader"

import HeadItems from "./components/ListHeader"

import './App.css';

class App extends Component {
  render() {
    return (
     
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>started Learning React!</h2>
        </div>
        <ListHeader />
      </div>
    );
  }
}

export default App;
