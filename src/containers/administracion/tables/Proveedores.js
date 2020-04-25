import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Proveedores extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloBusquedaProveedores" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="proveedor"
                    url={`http://apitramsa.azurewebsites.net/provedor/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="PVD_Codigo" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="PVD_Nombre" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableTelefono" />} accessor3="PVD_Telefono" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableEmail" />} accessor4="PVD_Correo" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarNuevoProveedor" />} path="/administracion/nuevo-proveedor" />
            </div>
        );
    }
}

export default Proveedores;