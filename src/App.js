import './App.css';
import React from "react";
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <div className='flex box-border'>
        <Menu />
        <Home />
      </div>
      
    </div>
  );
}

export default App;
