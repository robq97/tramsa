import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import Util from '../../../../components/util/DateTime';
import Select from '../../../ui/select/Select';

class Venta extends Component {

    render() {
        return (
            <div class="row">
                <div class="col">
                    <Button type="" icon="edit" btnTxt={this.props.btnTxt} />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="Fecha"
                        icon="today" id="" value={Util.date()} disabled="true" />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="No. de Factura"
                        icon="account_balance" id="" value="12345" disabled="true" />
                </div>
                <div class=" col-3 text-center">
                    <Select
                        URL="https://swapi.co/api/planets/" property="name"
                        smallId="" smallTxt="Cliente" />
                </div>
            </div>
        )
    }
};

export default Venta;