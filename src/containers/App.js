import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import Login from '.././components/forms/login/Login';
import Cambio_Contraseña from '../components/forms/sistema/cambioContraseña/Cambio_contraseña';
import Reiniciar_sesion from '../components/forms/sistema/reiniciarSesion/Reiniciar_sesion';
import Table from '../containers/tables/Table';
import Table_Materia_Prima from '../containers/tables/administracion/Tipo_Materia_Prima';
import Parametros from '../components/forms/parametros/Parametros';
import Consecutivos from '../components/forms/parametros/Consecutivos';
import Nueva_Materia_Prima from '../components/forms/administracion/Nueva_Materia_Prima';
import Bodega from '../containers/tables/administracion/Bodegas';
import Nueva_Bodega from '../components/forms/administracion/Nueva_Bodega';
import Camiones from '../containers/tables/administracion/Camiones';
import Nuevo_Camion from '../components/forms/administracion/Nuevo_Camion';
import Productos from '../containers/tables/administracion/Productos';
import Clientes from '../containers/tables/administracion/Clientes';
import Proveedores from '../containers/tables/administracion/Proveedores';
import Nuevo_Producto from '../components/forms/administracion/Nuevo_Producto';
import Nuevo_Cliente from '../components/forms/administracion/Nuevo_Cliente';
import Nuevo_Proveedor from '../components/forms/administracion/Nuevo_Proveedor';
import Pedido_Materia_Maestro from '../components/forms/procesos/crearPedido/Pedido_Materia_Maestro';
import Pedido_Materia_Detalle from '../components/forms/procesos/crearPedido/Pedido_Materia_Detalle';
import Procesos from './tables/procesos/Busqueda_Pedido';
import Ayuda from '../components/ui/card/ayuda/Ayuda';

class App extends Component {

  render() {
    return (
      <Layout>

        {/* testing components */}

        {/*<Login /> */}
        {/*<Reiniciar_sesion />*/}
        {/*<Cambio_Contraseña />*/}
        {/*<Table_Materia_Prima />*/}
        {/*<Consecutivos />*/}
        {/*<Parametros />*/}
        {/*<Nueva_Materia_Prima />*/}
        {/*<Bodega />*/}
        {/*<Nueva_Bodega />*/}
        {/*<Camiones />*/}
        {/*<Nuevo_Camion />*/}
        {/*<Productos />*/}
        {/*<Clientes />*/}
        {/*<Proveedores />*/}
        {/*<Nuevo_Producto />*/}
        {/*<Nuevo_Cliente />*/}
        {/*<Nuevo_Proveedor />*/}
        {/*<Pedido_Materia_Maestro />*/}
        {/*<Pedido_Materia_Detalle />*/}
        {/*<Procesos />*/}
        {/*<Ayuda />*/}
        <Ayuda />


      </Layout>
    );
  }
}

export default App;
