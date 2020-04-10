import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Crear_Pedido_Materias_Maestro from '../forms/crearPedido/Pedido_Materia_Maestro';
import Crear_Pedido_Materias_Detalle from '../forms/crearPedido/Pedido_Materia_Detalle';
import Pedido from '../tables/Busqueda_Pedido';
import Comprobar_Orden_Pedido from '../tables/Comprobar_Orden_Pedido';
import Pago from '../forms/Pago';

class RouterProcesos extends Component {

    render() {
        return (
            <div>
                <Route path="/procesos/crear-pedido-materias" exact component={Crear_Pedido_Materias_Maestro} />
                <Route path="/procesos/crear-pedido-materias" exact render={() => <h1>temporal</h1>} />
                <Route path="/procesos/crear-pedido-materias" exact component={Crear_Pedido_Materias_Detalle} />
                <Route path="/procesos/comprobar-orden-de-pedido" exact component={Comprobar_Orden_Pedido} />
                <Route path="/procesos/pedido" exact component={Pedido} />
                <Route path="/procesos/punto-de-venta/pago" exact component={Pago} />
            </div>
        );
    }
}

export default RouterProcesos;
