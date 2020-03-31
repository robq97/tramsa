import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import TableReports from '../../ui/tables/TableReports';

class TableReporteProductos extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Reporte de Productos" titleType="title-table" />
                <TableReports
                    title="Reporte de Productos"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={350} show1={true}
                    header2="Nombre" accessor2="title" width2={400} show2={true}
                    header3="Unidad de medida" accessor3="userId" width3={350} show3={true}
                    show4={false}
                    show5={false}
                    show6={false}
                    show7={false}
                    filename="reporte_productos_" />
            </div>
        );
    }
}

export default TableReporteProductos;