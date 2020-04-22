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
import counterpart from 'counterpart';
import es from '../lang/es';
import en from '../lang/en';

counterpart.registerTranslations('es', es);
counterpart.registerTranslations('en', en);
counterpart.setLocale('es');

class App extends Component {

  state = {
    auth: true,
    lang: 'es'
  }

  langChange = (lang) => {
    this.setState({ lang: lang });
    counterpart.setLocale(lang);
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.auth ?
          <div>
            <NavBar user="nombreUsuario" parentCallback={this.langChange} />
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
