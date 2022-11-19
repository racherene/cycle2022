import React from 'react';
import logo from "../logo.svg";
import '../App.css';
import carbonAPI from "../api/CarbonAPI";

function App() {
  const callAPI = async () => {
    const results = await carbonAPI.getCarEmissions(100, "km");
    console.log(results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={callAPI}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
