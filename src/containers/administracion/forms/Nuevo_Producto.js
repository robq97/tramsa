import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Label from '../../../components/ui/label/Label';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class NuevoProducto extends Component {

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
            USU_User: this.state.usuario
        }
        Axios.post(URL.concat('producto/create'), { data })
            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/administracion/nueva-producto');
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`producto/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
            })
            .catch((err) => console.error(err));
    }

    render() {

        const placeholderDescProducto = counterpart.translate('placeholderDescProducto');
        const placeholderPuntoReorden = counterpart.translate('placeholderPuntoReorden');

        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloNuevoProducto" />} titleType="title-form" />
                    <div class="lbl-padding">
                        <Label for="username" lblText={<Translate content="labelMaestro" />} />
                    </div>

                    <div class="row align-items-center pt-3">
                        <div class="col  pl-5 pr-5">
                            <Input
                                smallId="" name="descripcion" smallTxt={<Translate content="smallDescProducto" />}
                                icon="description" id="" placeholder={placeholderDescProducto} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="row align-items-center pt-3">
                        <div class="col pl-5">
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
                        <div class="col pr-5">
                            <Input
                                smallId="" name="orden" smallTxt={<Translate content="smallPuntoReorden" />}
                                icon="room" id="" placeholder={placeholderPuntoReorden} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoProducto" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnAgregarNuevoProducto" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoProducto;