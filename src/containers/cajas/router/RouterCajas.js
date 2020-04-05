import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Apertura_Cajas from '../forms/AperturaCajas';
import Registrar_Pase_Dinero from '../forms/RegistrarPaseDinero';

class RouterCajas extends Component {

    render() {
        return (
            <div>
                <Route path="/cajas/apertura-cajas" exact component={Apertura_Cajas} />
                <Route path="/cajas/registrar-pase-dinero" exact component={Registrar_Pase_Dinero} />
            </div>
        );
    }
}

export default RouterCajas;
