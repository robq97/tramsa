import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Bodegas extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Comprobar Orden De Pedido" titleType="title-form" />
                <Table
                    type="comprobacion"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={80} show1={true}
                    header2="Nombre" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Fecha" accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4="Materia Prima" accessor4="body" filterable4={false} width4={300} show4={true}
                    header5="Cantidad" accessor5="id" filterable5={false} width5={150} show5={true}
                    header6="Estado" accessor6="userId" filterable6={false} width6={120} show6={true}
                    inputShow={false}
                    iconShow={false}
                    btnTxt="Comprobar Pedido" />
            </div>
        );
    }
}

export default Bodegas;