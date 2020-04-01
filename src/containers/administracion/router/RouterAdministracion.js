import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nueva_Materia_Prima from '../forms/Nueva_Materia_Prima';
import Nueva_Bodega from '../forms/Nueva_Bodega';
import Nuevo_Camion from '../forms/Nuevo_Camion';
import Nuevo_Producto from '../forms/Nuevo_Producto';
import Nuevo_Cliente from '../forms/Nuevo_Cliente';
import Nuevo_Proveedor from '../forms/Nuevo_Proveedor';
import Materia_Prima from '../tables/Tipo_Materia_Prima'
import Bodega from '../tables/Bodegas';
import Camion from '../tables/Camiones';
import Producto from '../tables/Productos';
import Cliente from '../tables/Clientes';
import Proveedor from '../tables/Proveedores';

class RouterAdministracion extends Component {

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default RouterAdministracion;
