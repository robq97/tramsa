import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Tipo_Materia_Prima extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Tipo de Materia Prima" titleType="title-table" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80} show1={true}
                    header2="Nombre" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Cant. Existente" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Unidad de Medida" accessor4="body" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    btnTxt="Agregar Nueva Materia Prima" path="/administracion/nueva-materia-prima" />
            </div>
        );
    }
}

export default Tipo_Materia_Prima;