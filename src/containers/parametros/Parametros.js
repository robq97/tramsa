import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import IconButton from '../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../ui/modal/Modal';
import axios from 'axios';
import { URL } from '../util/common';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class Parametros extends Component {

    constructor() {
        super();
        this.state = {
            cantidad: 1,
            colones: 1,
            nombreEmpresa: '',
            mensaje: '',
            cedula: '',
            telefono: '',
            monedas: ['USD', 'CAD', 'GBP', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON',
                'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN',
                'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'AUD', 'MXN', 'ILS', 'HKD', 'KRW',
                'MYR'],
            direccion: '',
            moneda: 'USD',
            USU_User: sessionStorage.getItem('user'),
            empresa_id: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.cambio.today/v1/quotes/USD/CRC/json?quantity=1&key=4285|*QGc9paMXdKLT^XNJeox0mRc9b0ppYjF')
            .then((response) => {
                this.setState({
                    colones: response.data.result.amount
                })
            })
            .catch((err) => console.error(err));

        axios.get(URL.concat(`infoEmpresa/${this.state.USU_User}`))
            .then((response) => {
                this.setState({
                    empresa_id: response.data._id,
                    nombreEmpresa: response.data.NombreActual,
                    mensaje: response.data.MensajeActual,
                    cedula: response.data.CedulaJuridica,
                    telefono: response.data.Telefono,
                    direccion: response.data.Direccion
                })
            })
    }

    currencyUpdate = () => {
        axios.get(`https://api.cambio.today/v1/quotes/${this.state.moneda}/CRC/json?quantity=${this.state.cantidad}&key=4285|*QGc9paMXdKLT^XNJeox0mRc9b0ppYjF`)
            .then((response) => {
                this.setState({
                    colones: response.data.result.amount
                })
            })
            .catch((err) => console.error(err));
    }


    handleCurrencyChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state, this.currencyUpdate);
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
            _id: this.state.empresa_id,
            NombreActual: this.state.nombreEmpresa,
            MensajeActual: this.state.mensaje,
            CedulaJuridica: this.state.cedula,
            Telefono: this.state.telefono,
            Direccion: this.state.direccion
        }

        axios.post(URL.concat(`infoEmpresa/update/${this.state.USU_User}`), { data })
            .then((response) => {
                alert(response.data.message);
                window.location.reload();
            })
            .catch((err) => console.error(err));
    }

    render() {

        const placeholderValorCompra = counterpart.translate('placeholderValorCompra');

        return (
            <Card>
                <Modal />
                <form id="update-company-info-form" onSubmit={this.handleSubmit}>
                    <Title title={<Translate content="tituloTipoCambio" />} titleType="title-form" />
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            {/*<Select
                                URL="http://apitramsa.azurewebsites.net/rol/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una moneda" size={0} />*/}
                            <small><Translate content="smallSeleccionaMoneda" /></small>
                            <select name="moneda" onChange={(ev) => this.handleCurrencyChange(ev.target)}>
                                <option disabled>Seleccione una moneda</option>
                                {this.state.monedas.map((monedas) => (
                                    <option key={monedas}>{monedas}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-sm- text-center">
                            <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="cantidad" smallTxt={this.state.moneda}
                                icon="trending_up" id="" placeholder={placeholderValorCompra} value={this.state.cantidad} type="number" onChange={(ev) => this.handleCurrencyChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                        </div>
                        <div className="col-sm- text-center">
                            <IconButton type="" icon="subdirectory_arrow_right" color={colorPalette.grey._700} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallValorCompra" />}
                                icon="trending_up" id="" value={this.state.colones} disabled type="text" />
                        </div>
                    </div>

                    <hr />

                    <Title title={<Translate content="tituloTiqueteCaja" />} titleType="title-form" />
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCompania" />}
                                icon="business_center" id="" placeholder={this.state.nombreEmpresa} type="text" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallMensajeSaludo" />}
                                icon="message" id="" placeholder={this.state.mensaje} type="text" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallCedulaJuridica" />}
                                icon="featured_video" id="" placeholder={this.state.cedula} type="text" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallTelefonoActual" />}
                                icon="phone" id="" placeholder={this.state.telefono} type="tel" onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDireccionEstablecimiento" />}
                                icon="place" id="" placeholder={this.state.direccion} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type="" icon="send" disabled={!this.state.direccion && !this.state.mensaje &&
                            !this.state.telefono && !this.state.cedula && !this.state.nombreEmpresa} btnTxt="Actualizar Información" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default Parametros;