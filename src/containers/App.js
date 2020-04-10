import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';
import RouterAdministracion from '../containers/administracion/router/RouterAdministracion';
import RouterAyuda from '../containers/ayuda/router/RouterAyuda';
import RouterProcesos from '../containers/procesos/router/RouterProcesos';
import RouterReportes from '../containers/reportes/router/RouterReportes';
import RouterSistema from '../containers/sistema/router/RouterSistema';
import RouterParametros from '../containers/parametros/router/RouterParametros';
import RouterLogin from '../containers/login/router/RouterLogin';
import RouterConsultas from '../containers/consultas/router/RouterConsultas';
import RouterSeguridad from '../containers/seguridad/router/RouterSeguridad';
import RouterCajas from '../containers/cajas/router/RouterCajas';

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

              {/*<Redirect from='/' to="/parametros/param-generales" />*/}
              <RouterAdministracion />
              <RouterAyuda />
              <RouterProcesos />
              <RouterReportes />
              <RouterSistema />
              <RouterParametros />
              <RouterConsultas />
              <RouterSeguridad />
              <RouterCajas />

            </Layout>
          </div> : <div>
            <RouterLogin />
            <Redirect from='/' to="/" /></div>}
      </BrowserRouter>
    );
  }
}

export default App;
