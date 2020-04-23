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
                    edit="usuario"
                    url="http://apitramsa.azurewebsites.net/user/"
                    header1="Usuario" accessor1="USU_User" filterable1={true} width1={200} show1={true}
                    header2="Correo Electrónico" accessor2="USU_Email" filterable2={true} width2={300} show2={true}
                    header3="Nombre" accessor3="USU_Nombre" filterable3={false} width3={225} show3={true}
                    header4="Rol" accessor4="USU_Rol" filterable4={false} width4={125} show4={true}
                    header5="Estado" accessor5="USU_Estado" filterable5={false} width5={100} show5={true}
                    show6={false}
                    iconShow={true}
                    inputShow={false}
                    btnTxt="Agregar Nuevo Usuario"
                    path="/seguridad/nuevo-usuario" />
            </div>
        );
    }
}

export default Usuarios;