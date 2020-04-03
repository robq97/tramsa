import React, { Component } from 'react';
import Title from '../../../components/ui/title/Title';
import Table from '../../ui/tables/Table';

class Eventos extends Component {

    render() {
        return (
            <div>
                <Title
                    title="Eventos" titleType="title-form" />
                <Table
                    type=""
                    url="https://jsonplaceholder.typicode.com/posts"
                    header1="Código" accessor1="id" filterable1={true} width1={200} show1={true}
                    header2="Descripción" accessor2="title" filterable2={true} width2={900} show2={true}
                    show3={false}
                    show4={false}
                    show5={false}
                    show6={false}
                    iconShow={false} />
            </div>
        );
    }
}

export default Eventos;