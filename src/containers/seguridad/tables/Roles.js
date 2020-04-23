import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Roles extends Component {

    deleteRol = ROL_Codigo => {
        
    }

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloRoles" />} titleType="title-table" />
                <Table
                    type="normal"
                    url="http://apitramsa.azurewebsites.net/rol"
                    header1="Código Rol" accessor1="ROL_Codigo" filterable1={true} width1={150} show1={true}
                    header2="Nombre de Rol" accessor2="ROL_Nombre" filterable2={true} width2={300} show2={true}
                    header3="Roles Disponibles" accessor3="ROL_Disponibles" filterable3={false} width3={225} show3={true}
                    header4="Roles Asignados" accessor4="ROL_Asignado" filterable4={false} width4={325} show4={true}
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