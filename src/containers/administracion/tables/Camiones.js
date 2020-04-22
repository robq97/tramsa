import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Camiones extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Busqueda de Camiones" titleType="title-table" />
                <Table
                    type="normal"
                    edit="camion"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80} show1={true}
                    header2="Nombre Corto" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Marca" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Descripción" accessor4="body" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt="Agregar Nuevo Camion" path="/administracion/nuevo-camion" />
            </div>
        );
    }
}

export default Camiones;