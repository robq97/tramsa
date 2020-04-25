import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode'
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class NuevoProveedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            cedula: '',
            telefonoOficina: '',
            telefono: '',
            correo: '',
            direccion: '',
            codigoNuevo: '',
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
            PVD_Nombre: this.state.nombre,
            PVD_Cedula: this.state.cedula,
            PVD_OFI_Telefono: this.state.telefonoOficina,
            PVD_Correo: this.state.correo,
            PVD_Telefono: this.state.telefono,
            PVD_Direccion: this.state.direccion,
            USU_User: this.state.usuario
        }
        Axios.post(URL.concat('provedor/create'), { data })

            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/administracion/nueva-proveedor');
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`provedor/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
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
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloNuevoProveedor" />} titleType="title-form" />
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
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevaBodega" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnAgregarNuevoProveedor" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoProveedor;