import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import TableReports from '../../ui/tables/TableReports';
import Translate from 'react-translate-component';

class TableReporteInventarioBodega extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloReporteInvetarioBodega" />} titleType="title-table" />
                <TableReports
                    category="Inventario"
                    title="Reporte de Inventario por Bodega"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={250} show1={true}
                    header2="Nombre" accessor2="title" width2={400} show2={true}
                    header3="Unidad de medida" accessor3="userId" width3={150} show3={true}
                    header4="Cantidad" accessor4="userId" width4={150} show4={true}
                    header5="Punto Reorden" accessor5="userId" width5={150} show5={true}
                    show6={false}
                    show7={false}
                    inputShow={false}
                    filename="reporte_inventario_bodega_" />
            </div>
        );
    }
}

export default TableReporteInventarioBodega;