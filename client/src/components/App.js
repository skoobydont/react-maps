import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function fetchMessage(url) {
      const resp = await fetch(url);

      let text = await resp.text();

      let data = null;
      try {
        data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
      } catch (e) {
        console.err(`Invalid json\n${e}`);
      }

      if (resp.status !== 200) {
        throw Error(data ? data.message : 'No data');
      }
      console.log('data', data)
      setMessage(data);
    }
    fetchMessage('/api');
    
  },[])

  console.log('message', message)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
