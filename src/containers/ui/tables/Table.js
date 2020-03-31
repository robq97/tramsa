import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table-6';
import 'react-table-6/react-table.css'
import Button from '../../../components/ui/buttons/Button';
import IconButton from '../../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import Label from '../../../components/ui/label/Label'

class Table extends Component {

    state = {
        rows: []
    }

    componentDidMount() {
        const url = this.props.url;
        fetch(
            url, {
            method: "GET"
        }).then(response => response.json()).then(rows => {
            this.setState({ rows: rows })
        })
    }

    render() {
        const columns = [
            {
                Header: this.props.header1,
                accessor: this.props.accessor1,
                width: this.props.width1,
                filterable: this.props.filterable1,
                show: this.props.show1,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header2,
                accessor: this.props.accessor2,
                width: this.props.width2,
                filterable: this.props.filterable2,
                show: this.props.show2,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header3,
                accessor: this.props.accessor3,
                width: this.props.width3,
                filterable: this.props.filterable3,
                show: this.props.show3,
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: this.props.header4,
                accessor: this.props.accessor4,
                width: this.props.width4,
                filterable: this.props.filterable4,
                show: this.props.show4,
            },
            {
                Header: this.props.header5,
                accessor: this.props.accessor5,
                width: this.props.width5,
                filterable: this.props.filterable5,
                show: this.props.show5,
            },
            {
                Header: this.props.header6,
                accessor: this.props.accessor6,
                width: this.props.width6,
                filterable: this.props.filterable6,
                show: this.props.show6,
            },
            {
                Header: "Acciones",
                filterable: false,
                sortable: false,
                style: {
                    textAlign: "center"
                },
                Cell: props => {
                    return (
                        <div>
                            <IconButton type="" icon="create" color={colorPalette.grey._700} />
                            <IconButton type="" icon="info" color={colorPalette.blue._700}
                                toggle="modal" target="#info" />
                            <IconButton type="" icon="delete" color={colorPalette.red._700}
                                toggle="modal" target="#delete" />

                            <Modal id="info" body={true} confirmBtn={false} title="Información detallada"
                                bodyContent={<div>
                                    <Label lblText="linea 1" /> <br />
                                    <Label lblText="linea 2" /><br />
                                    <Label lblText="linea 3" /><br />
                                    <Label lblText="linea 4" /><br />
                                    <Label lblText="linea 5" /><br />
                                    <Label lblText="linea 6" /><br />
                                    <Label lblText="linea 7" /><br />
                                </div>} />
                            <Modal id="delete" body={false} confirmBtn={true} title="¿Está seguro que desea eliminar el item?" />
                        </div>
                    )
                }
            }
        ]

        return (
            <div>
                <Link to={this.props.path}>
                    <Button type="" icon="add" btnTxt={this.props.btnTxt} />
                </Link>
                <ReactTable className="ReactTable"
                    columns={columns}
                    data={this.state.rows}
                    filterable
                    noDataText={'No se encontraron datos.'}
                    defaultPageSize={10}
                    previousText={'Anterior'}
                    nextText={'Siguiente'}
                    loading={false}
                />
            </div>
        );
    };
}

export default Table;
