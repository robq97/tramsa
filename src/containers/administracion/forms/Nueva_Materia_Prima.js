import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode'
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';


class NuevaMateriaPrima extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            cantidad: '',
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
            MTP_Nombre: this.state.nombre,
            MTP_CAN_Existente: this.state.cantidad,
            MTP_UNI_Medida: this.state.unidadMedida,
            USU_User: this.state.usuario
        }
        Axios.post(URL.concat('materiaprima/create'), { data })
            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/administracion/nueva-materia-prima');
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`materiaprima/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
            })
            .catch((err) => console.error(err));
    }


    render() {

        const placeholderNombreMateria = counterpart.translate('placeholderNombreMateria');
        const placeholderCantidadMateria = counterpart.translate('placeholderCantidadMateria');

        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloNuevaMateriaPrima" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="nombre" smallTxt={<Translate content="smallNombreMateria" />}
                                icon="title" id="" placeholder={placeholderNombreMateria} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" name="cantidad" smallTxt={<Translate content="smallCantidadMateria" />}
                                icon="filter_1" id="" placeholder={placeholderCantidadMateria} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col pr-5">
                            <small className="form-text text-muted mb-1">{<Translate content="smallMedidaBodega" />}</small>
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
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevaMateria" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnAgregarNuevaMateria" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevaMateriaPrima;