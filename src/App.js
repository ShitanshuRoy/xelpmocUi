import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import './App.css';

class App extends Component {
  render() {
    return (
     
      <div className="App">
         <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListItem/>
      </div>
    );
  }
}

export default App;
