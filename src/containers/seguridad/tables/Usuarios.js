import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Usuarios extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Busqueda de Usuario" titleType="title-table" />
                <Table
                    type="normal"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Usuario" accessor1="id" filterable1={true} width1={200} show1={true}
                    header2="Correo Electrónico" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Nombre" accessor3="userId" filterable3={false} width3={225} show3={true}
                    header4="Rol" accessor4="body" filterable4={false} width4={125} show4={true}
                    header5="Estado" accessor5="body" filterable5={false} width5={100} show5={true}
                    show6={false}
                    iconShow={true}
                    btnTxt="Agregar Nuevo Usuario"
                    path="/seguridad/nuevo-usuario" />
            </div>
        );
    }
}

export default Usuarios;