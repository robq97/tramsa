import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class EditarMateriaPrima extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            cantidad: '',
            unidadMedida: '',
            codigonuevo: '',
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
        }
        Axios.post(URL.concat(`materiaprima/update/${sessionStorage.getItem('user')}`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.log(err));
    }

    render() {

        const placeholderNombreMateria = counterpart.translate('placeholderNombreMateria');
        const placeholderCantidadMateria = counterpart.translate('placeholderCantidadMateria');

        return (
            <form onSubmit={this.handleSubmit}>
                <Title title={<Translate content="tituloEditarMateria" />} titleType="title-form" />
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreMateria" />}
                            icon="title" id="" placeholder={placeholderNombreMateria} type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallCantidadMateria" />}
                            icon="filter_1" id="" placeholder={placeholderCantidadMateria} type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
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
                <div class="text-center">
                    <Button type="submit" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarMateriaPrima;