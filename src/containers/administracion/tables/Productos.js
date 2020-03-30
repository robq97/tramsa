import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../tables/Table'

class Productos extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Busqueda de Productos" titleType="title-table" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80}
                    header2="Nombre Corto" accessor2="title" filterable2={true} width2={300}
                    header3="Punto Re-orden" accessor3="userId" filterable3={false} width3={150}
                    header4="Descripción" accessor4="body" filterable4={false} width4={400}
                    btnTxt="Agregar Nuevo Producto" />
            </div>
        );
    }
}

export default Productos;