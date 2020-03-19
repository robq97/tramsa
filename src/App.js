import React, { Component } from 'react';
import './App.css';
import './components/navbar/Navbar.css';
import './components/logo/Logo.css';
import './components/ui/button/Button.css'
import './components/login/Login.css'
import './components/ui/label/Label.css'
import Navbar from './components/navbar/Navbar';
import Button from './components/ui/button/Button';
import Login from './components/login/Login';
import Container from './components/container/Container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar user="nombreUsuario" />
        <div className="container">


          {/* testing components */}
          <Login />


        </div>
      </div>
    );
  }
}

export default App;
