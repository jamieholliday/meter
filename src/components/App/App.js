import React, { Component } from 'react';
import './App.css';
import Meter from '../Meter/Meter';

class App extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend')
    .then(response => response.json())
    .then(json => {
      this.setState({
        loading: false,
        min: json.min,
        max: json.max,
        value: json.value,
        unit: json.unit,
        type: json.format,
        error: json.error
      })
    })
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
