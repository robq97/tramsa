import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class NuevoRol extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            disponibles: '',
            asignado: '',
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
            ROL_Nombre: this.state.nombre,
            ROL_Disponibles: this.state.disponibles,
            ROL_Asignado: this.state.asignado,
            USU_User: this.state.usuario
        }
        Axios.post(URL.concat('rol/create'), { data })
            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/seguridad/nuevo');
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`rol/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
            })
            .catch((err) => console.error(err));
    }


    render() {

        const placeholderNombreRol = counterpart.translate('placeholderNombreRol');
        const placeholderDescRol = counterpart.translate('placeholderDescRol');

        return (
            <Card>
                <Title title={<Translate content="tituloNuevoRol" />} titleType="title-form" />
                <form onSubmit={this.handleSubmit}>
                    <div class="row align-items-center">
                        <div class="col pr-5 pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreRol" />}
                                icon="title" name="nombre" id="" placeholder={placeholderNombreRol} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="disponibles" smallTxt={<Translate content="smallDisponibleRol" />}
                                icon="description" id="" placeholder={placeholderDescRol} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col pr-5 ">
                            <Input
                                smallId="" name="asignado" smallTxt={<Translate content="smallAsignadoRol" />}
                                icon="description" id="" placeholder={placeholderDescRol} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoRol" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnNuevoRol" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoRol;