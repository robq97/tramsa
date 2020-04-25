import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Bodegas extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloBusquedaBodega" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="bodega"
                    url={`http://apitramsa.azurewebsites.net/registroBodega/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="RGB_COD_Bodega" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableNombreCorto" />} accessor2="RGB_NOM_Corto" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tableTipo" />} accessor3="RGB_Tipo" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableUbicacion" />} accessor4="RGB_Ubicacion" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarNuevaBodega" />} path="/administracion/nueva-bodega" />
            </div>
        );
    }
}

export default Bodegas;