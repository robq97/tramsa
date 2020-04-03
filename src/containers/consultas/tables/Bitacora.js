import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Bitacora extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Consulta de Bitácora" titleType="title-form" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Usuario" accessor1="id" filterable1={true} width1={200} show1={true}
                    header2="Fecha/Hora" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Código de Registro" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Descripción" accessor4="body" filterable4={false} width4={450} show4={true}
                    show5={false}
                    show6={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default Bitacora;