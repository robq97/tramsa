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

class NuevoCamion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: '',
            marca: '',
            ano: '',
            placa: '',
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
            CAM_Descripcion: this.state.descripcion,
            CAM_Marca: this.state.marca,
            CAM_Ano: this.state.ano,
            CAM_Placa: this.state.placa,
            USU_User: this.state.usuario
        }
        Axios.post(URL.concat('camion/create'), { data })
            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/administracion/nuevo-camion');
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`camion/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
            })
            .catch((err) => console.error(err));
    }

    render() {

        const placeholderPlaca = counterpart.translate('placeholderPlaca');
        const placeholderMarca = counterpart.translate('placeholderMarca');
        const placeholderDescCamion = counterpart.translate('placeholderDescCamion');
        const placeholderAno = counterpart.translate('placeholderAno');

        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloNuevoCamion" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="placa" smallTxt={<Translate content="smallPlaca" />}
                                icon="title" id="" placeholder={placeholderPlaca} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>

                        <div class="col pr-5">
                            <Input
                                smallId="" name="marca" smallTxt={<Translate content="smallMarca" />}
                                icon="directions_bus" id="" placeholder={placeholderMarca} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="descripcion" smallTxt={<Translate content="smallDescCamion" />}
                                icon="description" id="" placeholder={placeholderDescCamion} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div class="col-5 pr-5">
                            <Input
                                smallId="" name="ano" smallTxt={<Translate content="smallAno" />}
                                icon="today" id="" placeholder={placeholderAno} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoCamion" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnNuevoCamion" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoCamion;