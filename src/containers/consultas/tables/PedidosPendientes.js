import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class PedidosPendientes extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloPedidosPendientes" />} titleType="title-form" />
                <Table
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1={<Translate content="tableNumeroPedido" />} accessor1="id" filterable1={true} width1={150} show1={true}
                    header2={<Translate content="tableNumeroPedido" />} accessor2="title" filterable2={true} width2={250} show2={true}
                    header3={<Translate content="tableFechaPedido" />} accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableCamion" />} accessor4="body" filterable4={false} width4={250} show4={true}
                    header5={<Translate content="tableMontoPedido" />} accessor5="body" filterable5={false} width5={250} show5={true}
                    show6={false}
                    inputShow={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default PedidosPendientes;