import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Usuarios from '../tables/Usuarios';
import Roles from '../tables/Roles';
import Eventos from '../tables/Eventos';
import Nuevo_Usuario from '../forms/NuevoUsuario';

class RouterSeguridad extends Component {

    render() {
        return (
            <div>
                <Route path="/seguridad/usuarios" exact component={Usuarios} />
                <Route path="/seguridad/roles" exact component={Roles} />
                <Route path="/seguridad/eventos" exact component={Eventos} />
                <Route path="/seguridad/nuevo-usuario" exact component={Nuevo_Usuario} />
            </div>
        );
    }
}

export default RouterSeguridad;
