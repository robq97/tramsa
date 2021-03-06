import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Bitacora extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloConsultaBitacora" />} titleType="title-form" />
                <Table
                    url="http://apitramsa.azurewebsites.net/bitacora/"
                    header1={<Translate content="tableUsuario" />} accessor1="BIT_Usuario" filterable1={true} width1={200} show1={true}
                    header2={<Translate content="tableBitacora" />} accessor2="BIT_FCH_Hora" filterable2={true} width2={300} show2={true}
                    header3={<Translate content="tablaCodigoRegistro" />} accessor3="BIT_COD_Registro" filterable3={false} width3={150} show3={true}
                    header4={<Translate content="tableDescripción" />} accessor4="BIT_Descripcion" filterable4={false} width4={450} show4={true}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default Bitacora;