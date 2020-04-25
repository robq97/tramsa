import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class EditarCliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            identificacion: '',
            docIdentidad: '',
            primerApellido: '',
            segundoApellido: '',
            nombre: '',
            estado: '',
            telefonoOficina: '',
            telefono: '',
            correo: '',
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
            CLT_Identificacion: this.state.identificacion,
            CLT_DOC_Identidad: this.state.docIdentidad,
            CLT_PRI_Apellido: this.state.primerApellido,
            CLT_SEG_Apellido: this.state.segundoApellido,
            CLT_Nombre: this.state.nombre,
            CLT_Estado: this.state.estado ? true : false,
            CLT_OFC_Telefono: this.state.telefonoOficina,
            CLT_Telefono: this.state.telefono,
            CLT_Correo: this.state.correo,
            CLT_Direccion: this.state.segundoApellido,
        }
        Axios.post(URL.concat(`cliente/update/${sessionStorage.getItem('user')}`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.log(err));
    }

    render() {

        const placeholderNombreCliente = counterpart.translate('placeholderNombreCliente');
        const placeholderPrimerApellido = counterpart.translate('placeholderPrimerApellido');
        const placeholderNumeroIdentificacion = counterpart.translate('placeholderNumeroIdentificacion');
        const placeholderNumeroTelefono = counterpart.translate('placeholderNumeroTelefono');
        const placeholderEmail = counterpart.translate('placeholderEmail');
        const placeholderDireccion = counterpart.translate('placeholderDireccion');
        const placeholderSegundoApellido = counterpart.translate('placeholderSegundoApellido');

        return (
            <form onSubmit={this.handleSubmit}>
                <Title title={<Translate content="tituloEditarCliente" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" name="nombre" smallTxt={<Translate content="smallNombreCliente" />}
                            icon="title" id="" placeholder={placeholderNombreCliente} type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" name="primerApellido" smallTxt={<Translate content="smallPrimerApellido" />}
                            icon="format_size" id="" placeholder={placeholderPrimerApellido} type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" name="segundoApellido" smallTxt={<Translate content="smallSegundoApellido" />}
                            icon="format_size" id="" placeholder={placeholderSegundoApellido} type="text" required="true" />
                    </div>
                    <div class="col">
                        <small className="form-text text-muted mb-1">{<Translate content="smallTipoIdentificacion" />}</small>
                        <div className="input-group mb-4">
                            <select className="form-control" name="docIdentidad" onChange={(ev) => this.handleChange(ev.target)}>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Licencia">Licencia</option>
                                <option value="Cédula de Residencia">Cédula de Residencia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" name="identificacion" smallTxt={<Translate content="smallNumeroIdentificacion" />}
                            icon="featured_video" id="" placeholder={placeholderNumeroIdentificacion} type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" name="telefono" smallTxt={<Translate content="smallNumeroTelefono" />}
                            icon="phone" id="" placeholder={placeholderNumeroTelefono} type="tel" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" name="correo" smallTxt={<Translate content="smallEmail" />}
                            icon="featured_video" id="" placeholder={placeholderEmail} type="email" required="true" />
                    </div>
                    <div class="col">
                        <small className="form-text text-muted mb-1">{<Translate content="smallEstadoCliente" />}</small>
                        <div className="input-group mb-4">
                            <select className="form-control" name="docIdentidad" onChange={(ev) => this.handleChange(ev.target)}>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" name="telefonoOficina" smallTxt={<Translate content="smallFechaIngreso" />}
                            icon="phone" id="" placeholder={placeholderNumeroTelefono} type="date" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" name="direccion" smallTxt={<Translate content="smallDireccion" />}
                            icon="place" id="" placeholder={placeholderDireccion} type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="submit" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarCliente;