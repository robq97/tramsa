import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import TableReports from '../../ui/tables/TableReports';
import Translate from 'react-translate-component';

class TableReporteInventarioGeneral extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloReporteInvetarioGeneral" />} titleType="title-table" />
                <TableReports
                    category="Inventario"
                    title="Reporte de Inventario General"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1={<Translate content="tableCodigo" />} accessor1="id" filterable1={true} width1={250} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="title" width2={400} show2={true}
                    header3={<Translate content="tableUnidadMedida" />} accessor3="userId" width3={150} show3={true}
                    header4={<Translate content="tablaCantidad" />} accessor4="userId" width4={150} show4={true}
                    header5={<Translate content="tableReorden" />} accessor5="userId" width5={150} show5={true}
                    show6={false}
                    show7={false}
                    inputShow={false}
                    filename="reporte_inventario_gral_" />
            </div>
        );
    }
}

export default TableReporteInventarioGeneral;