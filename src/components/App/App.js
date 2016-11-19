import React, { Component } from 'react';
import './App.css';
import Meter from '../Meter/Meter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Meter
          title="Currency"
        />
      </div>
    );
  }
}

export default App;
