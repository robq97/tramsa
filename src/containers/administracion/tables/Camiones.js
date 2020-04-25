import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Camiones extends Component {

    render() {
        return ( 
            <div>
                <Title
                    title={<Translate content="tituloBusquedaCamion" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="camion"
                    url={`http://apitramsa.azurewebsites.net/camion/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="CAM_Codigo" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableNombreCorto" />} accessor2="CAM_NOM_Corto" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableMarca" />} accessor3="CAM_Marca" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableDescripción" />} accessor4="CAM_Descripcion" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarNuevoCamion" />} path="/administracion/nuevo-camion" />
            </div>
        );
    }
}

export default Camiones;