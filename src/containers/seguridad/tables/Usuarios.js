import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Usuarios extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloBusquedaUsuario" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="usuario"
                    url="http://apitramsa.azurewebsites.net/user/"
                    header1={<Translate content="tableUsuario" />} accessor1="USU_User" filterable1={true} width1={200} show1={true}
                    header2={<Translate content="tableEmail" />} accessor2="USU_Email" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableNombre" />} accessor3="USU_Nombre" filterable3={false} width3={225} show3={true}
                    header4={<Translate content="tableRol" />} accessor4="USU_Rol" filterable4={false} width4={125} show4={true}
                    header5={<Translate content="tableEstado" />} accessor5="USU_Estado" filterable5={false} width5={100} show5={true}
                    show6={false}
                    iconShow={true}
                    inputShow={false}
                    btnTxt={<Translate content="tituloBusquedaUsuario" />}
                    path="/seguridad/nuevo-usuario" />
            </div>
        );
    }
}

export default Usuarios;