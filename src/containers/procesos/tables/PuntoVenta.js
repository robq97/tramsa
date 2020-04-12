import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class PuntoVenta extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Punto de Venta" titleType="title-form" />
                <Table
                    type="venta"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Producto" accessor1="title" filterable1={false} width1={400} show1={true}
                    header2="Descuento" accessor2="id" filterable2={false} width2={200} show2={true}
                    show3={false}
                    show4={false}
                    show5={false}
                    show6={false}
                    inputShow={true}
                    iconShow={true}
                    iconDeleteOnly={true}
                    btnTxt="Adjuntar Producto"
                    btnTxt2="Realizar Pago"
                    pagination={false}
                    path="/procesos/punto-de-venta/pago"
                />
            </div>
        );
    }
}

export default PuntoVenta;