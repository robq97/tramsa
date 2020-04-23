import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import IconButton from '../../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../modal/Modal';
import Label from '../../../components/ui/label/Label';
import InputSimple from '../../../components/ui/input/inputSimple';
import NormalType from './types/Normal';
import ArqueoType from './types/Arqueo';
import ConsultaType from './types/Consulta';
import CierreType from './types/Cierre';
import VentaType from './types/Venta';
import VentaBottom from './types/VentaBottom';
import CajaBottom from './types/CajaBottom';
import ComprobacionType from './types/Comprobacion';
import Axios from 'axios';
import EditarTipoMateriaPrima from '../../administracion/forms/Editar_Tipo_Materia_Prima';
import EditarMateriaPrima from '../../administracion/forms/Editar_Materia_Prima';
import EditarBodega from '../../administracion/forms/Editar_Bodega';
import EditarCamion from '../../administracion/forms/Editar_Camion'
import EditarProducto from '../../administracion/forms/Editar_Producto';
import EditarCliente from '../../administracion/forms/Editar_Cliente';
import EditarProveedor from '../../administracion/forms/Editar_Proveedor';
import EditarUsuario from '../../seguridad/forms/Editar_Usuario';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            selectedRow: ''
        }
    }

    componentDidMount() {
        const url = this.props.url;
        Axios.get(url)
            .then(response => {
                this.setState({ rows: response.data });
            })
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: (e, handleOriginal) => {
                sessionStorage.setItem('itemId', rowInfo.original._id);
                console.log(rowInfo.original._id);
                this.setState({
                    selectedRow: rowInfo.original._id
                })
                if (handleOriginal) {
                    handleOriginal()
                }
            }
        };
    };

    deleteItem() {
        const url = this.props.url;
        Axios.get(url.concat(`delete/${this.state.selectedRow}`))
            .then((res) => {
                alert(res.data.message);
            })
            .catch((err) => console.error(err));
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
                Header: "Cantidad", width: 150, show: this.props.inputShow, filterable: false, sortable: false, style: { textAlign: "center" },
                Cell: props => {
                    return (
                        <div>
                            {this.props.inputShow ?
                                <div>
                                    <InputSimple
                                        type="number" id="" />
                                </div>
                                : null}
                        </div>
                    )
                }
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
                                    <Modal id="delete" body={false} confirmBtn={true} confirmBtnAction={this.deleteItem()} title="¿Está seguro que desea eliminar el item?" />
                                </div> : <div>
                                    <IconButton
                                        type="" icon="create" color={colorPalette.grey._700}
                                        toggle="modal" target="#edit" />

                                    <IconButton
                                        type="" icon="info" color={colorPalette.blue._700}
                                        toggle="modal" target="#info" />
                                    <IconButton
                                        type="" icon="delete" color={colorPalette.red._700}
                                        toggle="modal" target="#delete" />
                                    <Modal
                                        id="edit" body={true} confirmBtn={false} title="Editar"
                                        bodyContent={<div>
                                            {this.props.edit === "tipo-materia-prima" ?
                                                <EditarTipoMateriaPrima /> : null}
                                            {this.props.edit === "materia-prima" ?
                                                <EditarMateriaPrima /> : null}
                                            {this.props.edit === "bodega" ?
                                                <EditarBodega /> : null}
                                            {this.props.edit === "camion" ?
                                                <EditarCamion /> : null}
                                            {this.props.edit === "producto" ?
                                                <EditarProducto /> : null}
                                            {this.props.edit === "cliente" ?
                                                <EditarCliente /> : null}
                                            {this.props.edit === "proveedor" ?
                                                <EditarProveedor /> : null}
                                            {this.props.edit === "usuario" ?
                                                <EditarUsuario /> : null}
                                        </div>} />
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
                                    <Modal id="delete" body={false} confirmBtn={true} confirmBtnAction={this.props.deleteAction} title="¿Está seguro que desea eliminar el item?" />
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

                {this.props.type === "venta" ?
                    <VentaType
                        btnTxt={this.props.btnTxt}
                        btnTxt2={this.props.btnTxt2}
                        to={this.props.path} />
                    : null
                }

                {this.props.type === "comprobacion" ?
                    <ComprobacionType
                        btnTxt={this.props.btnTxt} />
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
                    loading={false}
                    showPagination={this.props.pagination}
                    getTrProps={this.onRowClick}
                />

                {this.props.type === "arqueo" ?
                    <CajaBottom /> : null}
                {this.props.type === "cierre" ?
                    <CajaBottom /> : null}
                {this.props.type === "venta" ?
                    <div>
                        <VentaBottom btnTxt2={this.props.btnTxt2} to={this.props.path} />
                    </div> : null}
            </div >
        );
    };
};

export default Table;