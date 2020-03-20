import React, { Component } from 'react';
import './App.css';
import './components/navbar/Navbar.css';
import './components/logo/Logo.css';
import './components/ui/button/Button.css'
import './components/login/Login.css'
import './components/ui/label/Label.css'
import './components/ui/card/Card.css'
import './components/ui/title/Title.css'
import Navbar from './components/navbar/Navbar';
import Button from './components/ui/button/Button';
import Login from './components/login/Login';
import Card from './components/ui/card/Card';
import Title from './components/ui/title/Title'
import Cambio_Contraseña from './components/forms/sistema/cambioContraseña/Cambio_contraseña';
import Reiniciar_sesion from './components/forms/sistema/reiniciarSesion/Reiniciar_sesion';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar user="nombreUsuario" />
        <div className="container">

          {/* testing components */}

          {/*<Login /> */}
          {/*<Reiniciar_sesion />*/}
          <Cambio_Contraseña />

        </div>
      </div>
    );
  }
}

export default App;
