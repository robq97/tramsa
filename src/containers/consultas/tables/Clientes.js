import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Clientes extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloConsultaClientes" />} titleType="title-table" />
                <Table
                    type="consulta" 

                    url={`http://apitramsa.azurewebsites.net/cliente/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tablaIdentificacion" />} accessor1="CLT_Identificacion" filterable1={true} width1={150} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="CLT_Nombre" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tablePrimerApellido" />} accessor3="CLT_PRI_Apellido" filterable3={false} width3={130} show3={true}
                    header4={<Translate content="tableTelefono" />} accessor4="CLT_Telefono" filterable4={false} width4={130} show4={true}
                    header5={<Translate content="tableEmail" />} accessor5="CLT_Correo" filterable5={false} width5={250} show5={true}
                    show6={false}
                    iconShow={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnClientesActivos" />}
                    btnTxt2={<Translate content="btnClientesInactivos" />} />
            </div>
        );
    }
}

export default Clientes;