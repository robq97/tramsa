import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Proveedores extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Busqueda de Proveedores" titleType="title-table" />
                <Table
                    type="normal"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80} show1={true}
                    header2="Nombre" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Teléfono" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Correo Electrónico" accessor4="body" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    btnTxt="Agregar Nuevo Proveedor" path="/administracion/nuevo-proveedor" />
            </div>
        );
    }
}

export default Proveedores;