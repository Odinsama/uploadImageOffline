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
      <body>
        <Camera/>
      </body>
    </div>
  );
}

export default App;
