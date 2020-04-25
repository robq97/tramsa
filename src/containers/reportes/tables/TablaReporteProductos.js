import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import TableReports from '../../ui/tables/TableReports';
import Translate from 'react-translate-component';

class TableReporteProductos extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloReporteProductos" />} titleType="title-table" />
                <TableReports
                    category="Productos"
                    title="Reporte de Productos"

                    url={`http://apitramsa.azurewebsites.net/producto/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="PRD_Codigo" filterable1={true} width1={350} show1={true}
                    header2={<Translate content="tableUnidadMedida" />} accessor2="PRD_UNI_Medida" filterable2={true} width2={400} show2={true}
                    header3={<Translate content="tableReorden" />} accessor3="PRD_PTR_Orden" filterable3={false} width3={350} show3={true}

                    show4={false}
                    show5={false}
                    show6={false}
                    show7={false}
                    inputShow={false}
                    filename="reporte_productos_" />
            </div>
        );
    }
}

export default TableReporteProductos;