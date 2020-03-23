import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../Table'

class Tipo_Materia_Prima extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Tipo de Materia Prima" titleType="title-table" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80}
                    header2="Nombre" accessor2="title" filterable2={true} width2={300}
                    header3="Cant. Existente" accessor3="userId" filterable3={false} width3={150}
                    header4="Unidad de Medida" accessor4="body" filterable4={false} width4={400} />
            </div>
        );
    }
}

export default Tipo_Materia_Prima;