import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Productos extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloBusquedaProductos" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="producto" 
                    url={`http://apitramsa.azurewebsites.net/producto/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="PRD_Codigo" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableUnidadMedida" />} accessor2="PRD_UNI_Medida" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableReorden" />} accessor3="PRD_PTR_Orden" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableDescripción" />} accessor4="PRD_Descripcion" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarNuevoProducto" />} path="/administracion/nuevo-producto" />
            </div>
        );
    }
}

export default Productos;