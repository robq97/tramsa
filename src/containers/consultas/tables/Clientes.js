import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Clientes extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloConsultaClientes" />} titleType="title-table" />
                <Table
                    type="consulta"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Identificación" accessor1="id" filterable1={true} width1={150} show1={true}
                    header2="Nombre Completo" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Tel Habitación" accessor3="userId" filterable3={false} width3={130} show3={true}
                    header4="Tel Celular" accessor4="body" filterable4={false} width4={130} show4={true}
                    header5="Tel Trabajo" accessor5="body" filterable5={false} width5={130} show5={true}
                    header6="Correo Electrónico" accessor6="body" filterable6={false} width6={250} show6={true}
                    iconShow={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnClientesActivos" />}
                    btnTxt2={<Translate content="btnClientesInactivos" />} />
            </div>
        );
    }
}

export default Clientes;