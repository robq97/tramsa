import React, { Component } from 'react';
import './App.css';
import Layout from '../components/layout/layout'
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar'
import { Route, Redirect } from 'react-router-dom';
import Cambio_Contrasena from '../containers/sistema/Cambio_contraseña';
import Reiniciar_Sesion from '../containers/sistema/Reiniciar_sesion';
import Parametros_Generales from '../containers/parametros/Parametros';
import Consecutivos from '../containers/parametros/Consecutivos';
import Nueva_Materia_Prima from '../containers/administracion/forms/Nueva_Materia_Prima';
import Nueva_Bodega from '../containers/administracion/forms/Nueva_Bodega';
import Nuevo_Camion from '../containers/administracion/forms/Nuevo_Camion';
import Nuevo_Producto from '../containers/administracion/forms/Nuevo_Producto';
import Nuevo_Cliente from '../containers/administracion/forms/Nuevo_Cliente';
import Nuevo_Proveedor from '../containers/administracion/forms/Nuevo_Proveedor';
import Materia_Prima from '../containers/administracion/tables/Tipo_Materia_Prima'
import Bodega from '../containers/administracion/tables/Bodegas';
import Camion from '../containers/administracion/tables/Camiones';
import Producto from '../containers/administracion/tables/Productos';
import Cliente from '../containers/administracion/tables/Clientes';
import Proveedor from '../containers/administracion/tables/Proveedores';
import Crear_Pedido_Materias_Maestro from '../containers/procesos/forms/crearPedido/Pedido_Materia_Maestro';
import Crear_Pedido_Materias_Detalle from '../containers/procesos/forms/crearPedido/Pedido_Materia_Detalle';
import Pedido from '../containers/procesos/tables/Busqueda_Pedido';
import Comprobar_Orden_Pedido from '../containers/procesos/tables/Comprobar_Orden_Pedido';
import Ayuda from '../containers/ayuda/Ayuda';


import Login from '../containers/login/Login'

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

              <Route path="/sistema/cambiar-contrasena" exact component={Cambio_Contrasena} />
              <Route path="/sistema/reiniciar-sesion" exact component={Reiniciar_Sesion} />

              <Route path="/parametros/param-generales" exact component={Parametros_Generales} />
              <Route path="/parametros/consecutivos" exact component={Consecutivos} />

              <Route path="/administracion/materia-prima" exact component={Materia_Prima} />
              <Route path="/administracion/bodega" exact component={Bodega} />
              <Route path="/administracion/camion" exact component={Camion} />
              <Route path="/administracion/producto" exact component={Producto} />
              <Route path="/administracion/cliente" exact component={Cliente} />
              <Route path="/administracion/proveedor" exact component={Proveedor} />
              <Route path="/administracion/nueva-materia-prima" exact component={Nueva_Materia_Prima} />
              <Route path="/administracion/nueva-bodega" exact component={Nueva_Bodega} />
              <Route path="/administracion/nuevo-camion" exact component={Nuevo_Camion} />
              <Route path="/administracion/nuevo-producto" exact component={Nuevo_Producto} />
              <Route path="/administracion/nuevo-cliente" exact component={Nuevo_Cliente} />
              <Route path="/administracion/nuevo-proveedor" exact component={Nuevo_Proveedor} />

              <Route path="/procesos/crear-pedido-materias" exact component={Crear_Pedido_Materias_Maestro} />
              <Route path="/procesos/crear-pedido-materias" exact render={() => <h1>temporal</h1>} />
              <Route path="/procesos/crear-pedido-materias" exact component={Crear_Pedido_Materias_Detalle} />
              <Route path="/procesos/comprobar-orden-de-pedido" exact component={Comprobar_Orden_Pedido} />
              <Route path="/procesos/pedido" exact component={Pedido} />

              <Route path="/ayuda" exact component={Ayuda} />

            </Layout></div> : <Route path="/" exact component={Login} />}
      </BrowserRouter>
    );
  }
}

export default App;
