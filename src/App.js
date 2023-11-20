import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [inches, setInches] = useState('');
  const [meters, setMeters] = useState('');

  const inchToMeter = () => {
    setMeters(inches * 0.0254);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Inch-To-Meter Converter</h1>
      </div>
      <div className="content">
        <div className="inches-number">
          <label>Number of inches: </label>
          <input
            id="input"
            className="inches"
            placeholder="Enter number of inches here.."
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
        </div>
        <div className="button" onClick={inchToMeter}>
          <a>Calculate</a>
        </div>
        <div id="result">{meters} meters</div>
      </div>
    </div>
  );
}

export default App;
