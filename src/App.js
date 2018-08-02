import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import './App.css';

import Header from './components/Header';
import Terminal from './components/Terminal';

class App extends Component {
  render() {
    return (
      <div id="app">
          <div className="border">
            <Header/>
            <Terminal/>
          </div>
      </div>
    );
  }
}

export default App;
