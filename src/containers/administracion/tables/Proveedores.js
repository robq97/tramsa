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
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80}
                    header2="Nombre" accessor2="title" filterable2={true} width2={300}
                    header3="Teléfono" accessor3="userId" filterable3={false} width3={150}
                    header4="Correo Electrónico" accessor4="body" filterable4={false} width4={400}
                    btnTxt="Agregar Nuevo Proveedor" path="/administracion/nuevo-proveedor" />
            </div>
        );
    }
}

export default Proveedores;