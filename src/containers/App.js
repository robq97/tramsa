import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import Login from '.././components/forms/login/Login';
import Cambio_Contraseña from '../components/forms/sistema/cambioContraseña/Cambio_contraseña';
import Reiniciar_sesion from '../components/forms/sistema/reiniciarSesion/Reiniciar_sesion';
import Table from '../containers/tables/Table';
import Table_Materia_Prima from '../containers/tables/administracion/Tipo_Materia_Prima';
import Select from '../containers/ui/select/Select';
import Parametros from '../components/forms/parametros/parametrosGral/Parametros';
import Consecutivos from '../components/forms/parametros/consecutivos/Consecutivos';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          {/* testing components */}

          {/*<Login /> */}
          {/*<Reiniciar_sesion />*/}
          {/*<Cambio_Contraseña />*/}
          {/*<Table_Materia_Prima />*/}
          <Consecutivos />


        </Layout>
      </div>
    );
  }
}

export default App;
