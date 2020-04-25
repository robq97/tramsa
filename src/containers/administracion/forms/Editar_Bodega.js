import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import { URL } from '../../util/common';
import Axios from 'axios';


class EditarMateriaPrima extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            alias: '',
            ubicacion: '',
            unidadMedida: '',
            tipo: '',
            espacio: '',
            codigonuevo: '',
            usuario: sessionStorage.getItem('user'),
            selectedRow: this.props.selectedRow
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
            _id: this.state.selectedRow,
            RGB_Nombre: this.state.nombre,
            RGB_Alias: this.state.alias,
            RGB_Ubicacion: this.state.ubicacion,
            RGB_UNI_Medida: this.state.unidadMedida,
            RGB_Tipo: this.state.tipo,
            RGB_Espacio: this.state.espacio,
            USU_User: this.state.usuario
        }
        alert(this.state.selectedRow)

        console.log(this.state.selectedRow)

        Axios.post(URL.concat(`registrobodega/update/${sessionStorage.getItem('user')}`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.error(err));
    }



    render() {
        const placeholderNombreBodega = counterpart.translate('placeholderNombreBodega');
        const placeholderAliasBodega = counterpart.translate('placeholderAliasBodega');
        const placeholderEspacioBodega = counterpart.translate('placeholderEspacioBodega');
        const placeholderUbicacionBodega = counterpart.translate('placeholderUbicacionBodega');
        return (
            <form onSubmit={this.handleSubmit}>

                <Title title={<Translate content="tituloEditarBodega" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallAliasBodega" />}
                            icon="title" name="nombre" id="" placeholder={placeholderNombreBodega} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallEspacioBodega" />}
                            icon="meeting_room" name="espacio" id="" placeholder={placeholderEspacioBodega} type="number" required="true"onChange={(ev) => this.handleChange(ev.target)}/>
                    </div>
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
                <div class="row">
                    <div class="col ">
                        <Input
                            smallId="" smallTxt={<Translate content="smallAliasBodega" />}
                            icon="business_center" name="alias" id="" placeholder={placeholderAliasBodega} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <div class="col">
                        <small className="form-text text-muted mb-1">{<Translate content="smallTipoBodega" />}</small>
                        <div className="input-group mb-4">
                            <select className="form-control" name="tipo" onChange={(ev) => this.handleChange(ev.target)}>
                                <option value="Materia Prima">Materia Prima</option>
                                <option value="Producto Final">Producto Final</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" name= "ubicacion" smallTxt={<Translate content="smallUbicacionBodega" />}
                            icon="place" id="" placeholder={placeholderUbicacionBodega} type="text" required="true" />
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