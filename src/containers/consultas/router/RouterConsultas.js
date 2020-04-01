import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bitacora from '../tables/Bitacora';
import Clientes from '../tables/Clientes';
import Pedidos_Pendientes from '../tables/PedidosPendientes';

class RouterConsultas extends Component {

    render() {
        return (
            <div>
                <Route path="/consultas/bitacora" exact component={Bitacora} />
                <Route path="/consultas/clientes" exact component={Clientes} />
                <Route path="/consultas/pedidos-pendientes" exact component={Pedidos_Pendientes} />
            </div>
        );
    }
}

export default RouterConsultas;
