import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import IconButton from '../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../ui/modal/Modal';
import axios from 'axios';

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
            moneda: 'USD'
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
        this.setState(state);
        this.currencyUpdate();
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    render() {
        return (
            <Card>
                <Modal />
                <form id="update-company-info-form" onSubmit={this.handleSubmit}>
                    <Title title="Tipo de Cambio" titleType="title-form" />
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            {/*<Select
                                URL="http://apitramsa.azurewebsites.net/rol/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una moneda" size={0} />*/}
                            <small>Seleccione una moneda</small>
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
                                smallId="" name="cantidad" smallTxt={`Cantidad ${this.state.moneda}:`}
                                icon="trending_up" id="" placeholder={this.state.cantidad} type="number" onChange={(ev) => this.handleCurrencyChange(ev.target)} />
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
                                smallId="" smallTxt="Precio en colones (₡)"
                                icon="trending_up" id="" value={this.state.colones} disabled type="text" />
                        </div>
                    </div>

                    <hr />

                    <Title title="Tiquete de caja" titleType="title-form" />
                    <div className="row">
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese el nombre de la compañia"
                                icon="business_center" id="" placeholder="Nombre actual de la compañia" type="text" />
                        </div>
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese un mensaje de saludo"
                                icon="message" id="" placeholder="Mensaje actual" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese la cédula jurídica"
                                icon="featured_video" id="" placeholder="Número de ced jurídica actual" type="number" />
                        </div>
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese el número de teléfono"
                                icon="phone" id="" placeholder="Número de teléfono actual" type="tel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese la dirección del establecimiento"
                                icon="place" id="" placeholder="Dirección actual" type="text" required={true} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type="" icon="send" btnTxt="Actualizar Información" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default Parametros;