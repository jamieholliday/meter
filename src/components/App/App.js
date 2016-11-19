import React, { Component } from 'react';
import './App.css';
import Meter from '../Meter/Meter';

class App extends Component {
  state = {
    loading: true,
  }
  render() {
    const {min, max, value, unit, type, loading, error} = this.state;
    return (
      <div className="app">
        <Meter
          title="Currency"
          min={min}
          max={max}
          value={value}
          unit={unit}
          type={type}
          error={error}
          loading={loading}
        />
      </div>
    );
  }
}

export default App;
