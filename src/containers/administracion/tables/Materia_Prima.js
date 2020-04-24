import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Tipo_Materia_Prima extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloTipoMateriaPrima" />} titleType="title-table" />
                <Table
                    type="normal"
                    edit="materia-prima"
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1={<Translate content="tableCodigo" />} accessor1="id" filterable1={true} width1={80} show1={true}
                    header2={<Translate content="tableNombre" />} accessor2="title" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tablaCantidad" />} accessor3="userId" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableUnidadMedida" />} accessor4="body" filterable4={false} width4={400} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    btnTxt={<Translate content="btnAgregarMateriaPrima" />}
                    path="/administracion/nueva-materia-prima" />
            </div>
        );
    }
}

export default Tipo_Materia_Prima;