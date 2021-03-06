import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';
import Translate from 'react-translate-component';

class Eventos extends Component {

    render() {
        return (
            <div>
                <Title
                    title={<Translate content="tituloEventos" />} titleType="title-form" />
                <Table
                    type=""
                    url={`http://apitramsa.azurewebsites.net/evento/${sessionStorage.getItem('user')}`}
                    header1={<Translate content="tableCodigo" />} accessor1="EVE_COD_Evento" filterable1={true} width1={200} show1={true}
                    header2={<Translate content="tableDescripción" />} accessor2="EVE_DES_Evento" filterable2={true} width2={900} show2={true}
                    show3={false}
                    show4={false}
                    show5={false}
                    show6={false}
                    inputShow={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default Eventos;