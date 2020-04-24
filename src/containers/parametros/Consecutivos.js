import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import IconButton from '../../components/ui/buttons/Icon-Button';
import { colorPalette } from 'material-icons-react';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import axios from 'axios';
import { URL } from '../util/common';

class Consecutivos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consecutivos: [],
            consecutivo: '',
            valor: 0,
            prefijo: '',
            descripcion: '',
        }
    }

    componentDidMount() {
        axios.get(URL.concat('consecutivo'))
            .then((response) => {
                this.setState({
                    consecutivos: response.data
                })
            });
    }

    onTMPSelect() {
        this.state.consecutivos.forEach(element => {
            if (this.state.consecutivo === element.CON_Tipo) {
                this.setState({
                    valor: element.CON_ValorConsecutivo,
                    prefijo: element.CON_Prefijo,
                    descripcion: element.CON_Descripcion
                })
            }
        });
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state, this.onTMPSelect);
    }

    render() {

        const placeholderDescripcion = counterpart.translate('placeholderDescripcion');
        const placeholderValorConsecutivo = counterpart.translate('placeholderValorConsecutivo');
        const placeholderPrefijo = counterpart.translate('placeholderPrefijo');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloConsecutivos" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <small>{<Translate content="smallSeleccioneTipo" className="form-text text-muted mb-1" />}</small>
                            <div className="input-group mb-4">
                                <select class="form-control" name="consecutivo" onChange={(ev) => this.handleChange(ev.target)}>

                                    {this.state.consecutivos.map((consecutivos) => (
                                        <option key={consecutivos.CON_Tipo}>{consecutivos.CON_Tipo}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div class="col-sm- text-center">
                            <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDescripcion" />}
                                icon="description" id="" placeholder={placeholderDescripcion} value={this.state.descripcion} type="text" required="true" />
                        </div>
                    </div>

                    <hr />

                    <div class="row align-items-center">
                        <div class="col pr-5 pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallValorConsecutivo" />}
                                icon="text_rotation_none" id="" placeholder={placeholderValorConsecutivo} value={this.state.valor} type="text" required="true" disabled="true" />
                        </div>
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallPrefijo" />}
                                icon="short_text" id="" placeholder={placeholderPrefijo} value={this.state.prefijo} type="text" disabled="true" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnGenerarConsecutivo" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default Consecutivos;