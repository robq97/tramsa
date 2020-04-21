import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cambio_Contrasena from '../Cambio_contraseña';

class RouterSistema extends Component {

    render() {
        return (
            <div>
                <Route path="/sistema/cambiar-contrasena" exact component={Cambio_Contrasena} />
            </div>
        );
    }
}

export default RouterSistema;
