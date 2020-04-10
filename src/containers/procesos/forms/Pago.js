import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Input from '../../../components/ui/input/Input';
import Select from '../../ui/select/Select';
import Button from '../../../components/ui/buttons/Button';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';

class Pago extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Card>
                <Title title="Método de Pago" />
                <div class="pt-4" id="PaymentForm">
                    <Cards
                        acceptedCards={['visa', 'mastercard']}
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focus={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                        preview={this.true}
                    />
                    <form>
                        <div class="row pt-4">
                            <div class="col-5 pl-5">
                                <Input
                                    smallTxt="Número de tarjeta" icon="payment" type="tel" name="number" placeholder="Número de tarjeta"
                                    onChange={this.handleInputChange} onFocus={this.handleInputFocus} required={true} maxLength="16"
                                    minLength="16" />
                            </div>
                            <div class="col-7 pr-5 ">
                                <Input
                                    smallTxt="Nombre del tarjetahabiente" icon="account_circle" type="text" name="name" placeholder="Nombre del tarjetahabiente"
                                    onChange={this.handleInputChange} onFocus={this.handleInputFocus} required={true} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 pl-5">
                                <Input
                                    smallTxt="Fecha de expiración" icon="today" type="text" name="expiry" placeholder="mm/aa"
                                    onChange={this.handleInputChange} onFocus={this.handleInputFocus} required={true}
                                    maxLength="5" minLength="4" />
                            </div>
                            <div class="col-4 ">
                                <Input
                                    smallTxt="Código de seguridad" icon="account_balance" type="string" name="cvc" placeholder="cvc"
                                    onChange={this.handleInputChange} onFocus={this.handleInputFocus} required={true} maxLength="3"
                                    minLength="3" />
                            </div>
                            <div class="col-4 pr-5">
                                <Select
                                    URL="https://swapi.co/api/planets/" property="name"
                                    smallId="" smallTxt="Moneda" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <AutomaticCode smallId="" smallTxt="Monto Final"
                                    id="" placeholder="12345" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col text-center">
                                <Button type="" icon="payment" btnTxt="Confirmar Pago" />
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        );
    }
}

export default Pago;