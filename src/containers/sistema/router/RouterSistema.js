import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cambio_Contrasena from '../Cambio_contraseña';
import Reiniciar_Sesion from '../Reiniciar_sesion';

class RouterSistema extends Component {

    render() {
        return (
            <div>
                <Route path="/sistema/cambiar-contrasena" exact component={Cambio_Contrasena} />
                <Route path="/sistema/reiniciar-sesion" exact component={Reiniciar_Sesion} />
            </div>
        );
    }
}

export default RouterSistema;
