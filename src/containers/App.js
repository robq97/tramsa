import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/navbar'
import { Redirect } from 'react-router-dom';
import RouterAdministracion from '../containers/administracion/router/RouterAdministracion';
import RouterAyuda from '../containers/ayuda/router/RouterAyuda';
import RouterReportes from '../containers/reportes/router/RouterReportes';
import RouterSistema from '../containers/sistema/router/RouterSistema';
import RouterParametros from '../containers/parametros/router/RouterParametros';
import RouterLogin from '../containers/login/router/RouterLogin';
import RouterConsultas from '../containers/consultas/router/RouterConsultas';
import RouterSeguridad from '../containers/seguridad/router/RouterSeguridad';

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
              <RouterReportes />
              <RouterSistema />
              <RouterParametros />
              <RouterConsultas />
              <RouterSeguridad />

            </Layout>
          </div> : <div>
            <RouterLogin />
            <Redirect from='/' to="/" /></div>}
      </BrowserRouter>
    );
  }
}

export default App;
