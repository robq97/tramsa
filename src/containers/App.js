import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/navbar/Navbar';
import Login from '.././components/login/Login';
import Cambio_Contraseña from '../components/forms/sistema/cambioContraseña/Cambio_contraseña';
import Reiniciar_sesion from '../components/forms/sistema/reiniciarSesion/Reiniciar_sesion';

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
