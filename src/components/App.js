import React from 'react';
import Map from './Map';
import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        Map Section
        <Map />
      </div>
    </div>
  );
}

export default App;
