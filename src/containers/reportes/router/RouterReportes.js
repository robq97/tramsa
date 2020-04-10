import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Reporte_Productos from '../tables/TablaReporteProductos';
import Reporte_Inventario from '../forms/ReporteInventario';
import Reporte_Ventas from '../forms/ReporteVentas';
import Table_Reporte_Inventario_General from '../tables/TablaReporteInventarioGeneral';
import Table_Reporte_Inventario_Bodega from '../tables/TablaReporteInventarioBodega';
import Table_Reporte_Ventas from '../tables/TablaReporteVentas';
import Table_Reporte_Lista_Precios from '../tables/TablaListaPrecios';
import PrintTest from '../../ui/tables/PrintTest';

class RouterReportes extends Component {

    render() {
        return (
            <div>
                <Route path="/reportes/productos" exact component={Reporte_Productos} />
                <Route path="/reportes/inventarios" exact component={Reporte_Inventario} />
                <Route path="/reportes/inventarios/general" exact component={Table_Reporte_Inventario_General} />
                <Route path="/reportes/inventarios/bodega" exact component={Table_Reporte_Inventario_Bodega} />
                <Route path="/reportes/ventas" exact component={Reporte_Ventas} />
                <Route path="/reportes/ventas/general" exact component={Table_Reporte_Ventas} />
                <Route path="/reportes/ventas/precios" exact component={Table_Reporte_Lista_Precios} />
                <Route path="/print" exact component={PrintTest} />
            </div>
        );
    }
}

export default RouterReportes;
