import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Label from '../../../components/ui/label/Label';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class EditarProducto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion: '',
            orden: '',
            unidadMedida: '',
            codigonuevo: '',
            usuario: sessionStorage.getItem('user')
        }
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            PRD_Descripcion: this.state.descripcion,
            PRD_PTR_Orden: this.state.orden,
            PRD_UNI_Medida: this.state.unidadMedida,
        }
        Axios.post(URL.concat(`producto/update/${sessionStorage.getItem('user')}`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.log(err));
    }

    render() {

        const placeholderDescProducto = counterpart.translate('placeholderDescProducto');
        const placeholderPuntoReorden = counterpart.translate('placeholderPuntoReorden');

        return (
            <form onSubmit={this.handleSubmit} >
                <Title title={<Translate content="tituloEditarProducto" />} titleType="title-form" />
                <div class="text-left">
                    <Label for="username" lblText={<Translate content="labelMaestro" />} />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreProducto" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDescProducto" />}
                            icon="description" id="" placeholder={placeholderDescProducto} type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <small className="form-text text-muted mb-1">{<Translate content="smallMedidaProductos" />}</small>
                        <div className="input-group mb-4">
                            <select className="form-control" name="unidadMedida" onChange={(ev) => this.handleChange(ev.target)}>
                                <option value="Área">Área</option>
                                <option value="Metros">Metros</option>
                                <option value="Metros cúbicos">Metros cúbicos</option>
                                <option value="Metros cuadrados">Metros cuadrados</option>
                                <option value="Litros">Litros</option>
                                <option value="Mililitros">Mililitros</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallPuntoReorden" />}
                            icon="room" id="" placeholder={placeholderPuntoReorden} type="text" required="true" />
                    </div>
                </div>
                <div class="text-left">
                    <Label for="username" lblText={<Translate content="labelDetalle" />} />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallCodigoProducto" />}
                            icon="account_balance" id="" placeholder={this.state.codigonuevo} type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDescProducto" />}
                            icon="description" id="" placeholder={placeholderDescProducto} type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="submit" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form >
        )
    }
}

export default EditarProducto;