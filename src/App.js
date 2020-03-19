import React from 'react';
import './App.css';
import './components/navbar/Navbar.css';
import './components/logo/Logo.css';
import './components/ui/button/Button.css'
import Navbar from './components/navbar/Navbar';
import Button from './components/ui/button/Button'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button />
    </div>
  );
}

export default App;
