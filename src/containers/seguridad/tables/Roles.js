import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Roles extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Roles" titleType="title-table" />
                <Table
                    type="normal"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código Rol" accessor1="id" filterable1={true} width1={150} show1={true}
                    header2="Nombre de Rol" accessor2="title" filterable2={true} width2={300} show2={true}
                    header3="Roles Disponibles" accessor3="userId" filterable3={false} width3={225} show3={true}
                    header4="Roles Asignados" accessor4="body" filterable4={false} width4={325} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    iconShow={true}
                    iconDeleteOnly={true}
                    btnTxt="Agregar Rol"
                    path="/seguridad/roles/nuevo" />
            </div>
        );
    }
}

export default Roles;