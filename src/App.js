import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
