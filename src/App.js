import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Camera} from "./camera/Camera";

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <input type={"file"} accept={"image/*"}/>
      </div>
    </div>
  );
}

export default App;
