import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import IconButton from '../../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../modal/Modal';
import Label from '../../../components/ui/label/Label';
import Input from '../../../components/ui/input/Input';
import NormalType from './types/Normal';
import ArqueoType from './types/Arqueo';
import ConsultaType from './types/Consulta';
import CierreType from './types/Cierre';

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
                Header: this.props.header1, accessor: this.props.accessor1, width: this.props.width1, filterable: this.props.filterable1,
                show: this.props.show1
            },
            {
                Header: this.props.header2, accessor: this.props.accessor2, width: this.props.width2, filterable: this.props.filterable2,
                show: this.props.show2
            },
            {
                Header: this.props.header3, accessor: this.props.accessor3, width: this.props.width3, filterable: this.props.filterable3,
                show: this.props.show3
            },
            {
                Header: this.props.header4, accessor: this.props.accessor4, width: this.props.width4, filterable: this.props.filterable4,
                show: this.props.show4,
            },
            {
                Header: this.props.header5, accessor: this.props.accessor5, width: this.props.width5, filterable: this.props.filterable5,
                show: this.props.show5,
            },
            {
                Header: this.props.header6, accessor: this.props.accessor6, width: this.props.width6, filterable: this.props.filterable6,
                show: this.props.show6,
            },
            {
                Header: "Acciones", show: this.props.iconShow, filterable: false, sortable: false, style: { textAlign: "center" },
                Cell: props => {
                    return (
                        <div>
                            {this.props.iconDeleteOnly ?
                                <div>
                                    <IconButton
                                        type="" icon="delete" color={colorPalette.red._700}
                                        toggle="modal" target="#delete" />
                                </div> : <div>
                                    <IconButton
                                        type="" icon="create" color={colorPalette.grey._700} />
                                    <IconButton
                                        type="" icon="info" color={colorPalette.blue._700}
                                        toggle="modal" target="#info" />
                                    <IconButton
                                        type="" icon="delete" color={colorPalette.red._700}
                                        toggle="modal" target="#delete" />
                                    <Modal
                                        id="info" body={true} confirmBtn={false} title="Información detallada"
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
                                </div>}
                        </div>
                    )
                }
            }
        ]

        return (
            <div>
                {this.props.type === "normal" ?
                    <NormalType
                        to={this.props.path}
                        btnTxt={this.props.btnTxt} />
                    : null}

                {this.props.type === "arqueo" ?
                    <ArqueoType
                        to={this.props.path}
                        btnTxt={this.props.btnTxt} />
                    : null}

                {this.props.type === "consulta" ?
                    <ConsultaType
                        btnTxt={this.props.btnTxt}
                        btnTxt2={this.props.btnTxt2} />
                    : null
                }

                {this.props.type === "cierre" ?
                    <CierreType
                        btnTxt={this.props.btnTxt}
                        btnTxt2={this.props.btnTxt2}
                        onClick={() => window.print()} />
                    : null
                }

                <ReactTable
                    className="ReactTable"
                    columns={columns}
                    data={this.state.rows}
                    filterable
                    noDataText={'No se encontraron datos.'}
                    defaultPageSize={10}
                    previousText={'Anterior'}
                    nextText={'Siguiente'}
                    loading={false} />

                {this.props.type === "arqueo" || "cierre" ?
                    <div class="pt-5 row">
                        <div class="col text-right" />
                        <div class="col-4 text-center">
                            <Input
                                smallId="" smallTxt="Caja final"
                                icon="grade" id="" value="12345" disabled="true" />
                        </div>
                        <div class="col text-right" />
                    </div> : null}
            </div >
        );
    };
};

export default Table;