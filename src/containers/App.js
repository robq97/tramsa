import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';
import Router_Administracion from '../containers/administracion/router/RouterAdministracion';
import Router_Ayuda from '../containers/ayuda/router/RouterAyuda';
import Router_Procesos from '../containers/procesos/router/RouterProcesos';
import Router_Reportes from '../containers/reportes/router/RouterReportes';
import Router_Sistema from '../containers/sistema/router/RouterSistema';
import Router_Parametros from '../containers/parametros/router/RouterParametros';
import Router_Login from '../containers/login/router/RouterLogin';
import Router_Consultas from '../containers/consultas/router/RouterConsultas';

class App extends Component {

  state = {
    auth: true
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.auth ?
          <div>
            <NavBar user="nombreUsuario" />
            <Layout>

              <Redirect from='/' to="/parametros/param-generales" />
              <Router_Administracion />
              <Router_Ayuda />
              <Router_Procesos />
              <Router_Reportes />
              <Router_Sistema />
              <Router_Parametros />
              <Router_Consultas />

            </Layout>
          </div> : <Router_Login />}
      </BrowserRouter>
    );
  }
}

export default App;
