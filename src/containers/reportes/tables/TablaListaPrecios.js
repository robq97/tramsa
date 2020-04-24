import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import TableReports from '../../ui/tables/TableReports';
import Translate from 'react-translate-component';

class TableListaPrecios extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloListaPrecios" />} titleType="title-table" />
                <TableReports
                    category="Precios"
                    title="Lista de Precios"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1={<Translate content="tableCodigo" />} accessor1="id" filterable1={true} width1={350} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="title" width2={400} show2={true}
                    header3={<Translate content="tablaMontoVenta" />} accessor3="userId" width3={350} show3={true}
                    show4={false}
                    show5={false}
                    show6={false}
                    show7={false}
                    inputShow={false}
                    filename="lista_precios_" />
            </div>
        );
    }
}

export default TableListaPrecios;