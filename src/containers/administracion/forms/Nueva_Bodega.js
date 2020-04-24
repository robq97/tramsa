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

class NuevaBodega extends Component {

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
            RGB_Nombre: this.state.nombre,
            RGB_Alias: this.state.alias,
            RGB_Ubicacion: this.state.ubicacion,
            RGB_UNI_Medida: this.state.unidadMedida,
            RGB_Tipo: this.state.tipo,
            RGB_Espacio: this.state.espacio,
            USU_User: this.state.usuario,

        }
        Axios.post(URL.concat('registrobodega/create'), { data })
            .then((response) => {
                alert(response.data.message);
                this.context.router.history.push('/administracion/nueva-bodega');
            })
            .catch((err) => console.error(err));
    }

    componentDidMount() {
        Axios.get(URL.concat(`registrobodega/codigo/disponible/${this.state.usuario}`))
            .then((response) => {
                this.setState({
                    codigonuevo: response.data
                })
            })
            .catch((err) => console.error(err));
    }



    render() {
        const placeholderNombreBodega = counterpart.translate('placeholderNombreBodega');
        const placeholderAliasBodega = counterpart.translate('placeholderAliasBodega');
        const placeholderEspacioBodega = counterpart.translate('placeholderEspacioBodega');
        const placeholderUbicacionBodega = counterpart.translate('placeholderUbicacionBodega');
        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevaBodega" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" name="RGB_Nombre" smallTxt={<Translate content="smallNombreBodega" />}
                                icon="title" id="" placeholder={placeholderNombreBodega} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" name="RGB_Alias" smallTxt={<Translate content="smallAliasBodega" />}
                                icon="business_center" id="" placeholder={placeholderAliasBodega} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallEspacioBodega" />}
                                icon="meeting_room" id="" placeholder={placeholderEspacioBodega} type="number" required="true" />
                        </div>
                        <div >
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
                        <div class="col pr-5">
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
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" name="ubicacion" smallTxt={<Translate content="smallUbicacionBodega" />}
                                icon="place" id="" placeholder={placeholderUbicacionBodega} type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevaBodega" />}
                        id="" placeholder={this.state.codigonuevo} />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnNuevaBodega" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevaBodega;