import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import Login from '.././components/login/Login';
import Cambio_Contraseña from '../components/forms/sistema/cambioContraseña/Cambio_contraseña';
import Reiniciar_sesion from '../components/forms/sistema/reiniciarSesion/Reiniciar_sesion';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          {/* testing components */}

          {/*<Login /> */}
          {/*<Reiniciar_sesion />*/}
          <Cambio_Contraseña />

        </Layout>
      </div>
    );
  }
}

export default App;
