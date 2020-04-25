import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';
import Axios from 'axios';
import { URL } from '../../util/common';
import counterpart from 'counterpart';

class EditarProveedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cedula: '',
            usuario: sessionStorage.getItem('user'),
            telefono: this.props.selectedRow,
            ofi_telefono: '',
            direccion: ''
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
            TMP_Descripcion: this.state.nombre,
            USU_User: this.state.usuario
        }

        console.log(this.state.selectedRow)

        Axios.post(URL.concat(`tipomateriaprima/update`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.error(err));
    }

    render() {
        const placeholderNombreProveedor = counterpart.translate('placeholderNombreProveedor');
        const placeholderNumeroIdentificacionProveedor = counterpart.translate('placeholderNumeroIdentificacionProveedor');
        const placeholderNumeroTelefonoProveedor = counterpart.translate('placeholderNumeroTelefonoProveedor');
        const placeholderEmailProveedor = counterpart.translate('placeholderEmailProveedor');
        const placeholderDireccionProveedor = counterpart.translate('placeholderDireccionProveedor');
        const placeholderTelefonoContacto = counterpart.translate('placeholderTelefonoContacto');
        return (
            <form onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloEditarProveedor" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="nombre" smallTxt={<Translate content="smallNombreProveedor" />}
                                icon="title" id="" placeholder={placeholderNombreProveedor} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" name="cedula" smallTxt={<Translate content="smallNumeroIdentificacionProveedor" />}
                                icon="featured_video" id="" placeholder={placeholderNumeroIdentificacionProveedor} type="number" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="telefono" smallTxt={<Translate content="smallNumeroTelefonoProveedor" />}
                                icon="phone" id="" placeholder={placeholderNumeroTelefonoProveedor} type="tel" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" name="telefonoOficina" smallTxt={<Translate content="smallTelefonoContacto" />}
                                icon="phone" id="" placeholder={placeholderTelefonoContacto} type="tel" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="correo" smallTxt={<Translate content="smallEmailProveedor" />}
                                icon="featured_video" id="" placeholder={placeholderEmailProveedor} type="email" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" name="direccion" smallTxt={<Translate content="smallDireccionProveedor" />}
                                icon="place" id="" placeholder={placeholderDireccionProveedor} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                    </div>
                </form>
        )
    }
}

export default EditarProveedor;