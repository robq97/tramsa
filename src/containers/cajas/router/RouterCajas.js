import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Apertura_Cajas from '../forms/AperturaCajas';
import Registrar_Pase_Dinero from '../forms/RegistrarPaseDinero';
import Arqueo_Caja from '../tables/ArqueoCajas';
import Cierre_Caja from '../tables/CierreCajas';

class RouterCajas extends Component {

    render() {
        return (
            <div>
                <Route path="/cajas/apertura-cajas" exact component={Apertura_Cajas} />
                <Route path="/cajas/registrar-pase-dinero" exact component={Registrar_Pase_Dinero} />
                <Route path="/cajas/arqueo-caja" exact component={Arqueo_Caja} />
                <Route path="/cajas/cierre-caja" exact component={Cierre_Caja} />



            </div>
        );
    }
}

export default RouterCajas;
