import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Clientes extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloBusquedaCliente" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="cliente"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1={<Translate content="tableCodigo" />} accessor1="id" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="title" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableEstado" />} accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableEmail" />} accessor4="body" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarNuevoCliente" />} path="/administracion/nuevo-cliente" />
            </div>
        );
    }
}

export default Clientes;