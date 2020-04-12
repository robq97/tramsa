import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class PedidosPendientes extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Consulta de Pedidos Pendientes" titleType="title-form" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Número de Pedido" accessor1="id" filterable1={true} width1={150} show1={true}
                    header2="Fecha de Pedido" accessor2="title" filterable2={true} width2={250} show2={true}
                    header3="Proveedor" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Camión" accessor4="body" filterable4={false} width4={250} show4={true}
                    header5="Monto del Pedido" accessor5="body" filterable5={false} width5={250} show5={true}
                    show6={false}
                    inputShow={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default PedidosPendientes;