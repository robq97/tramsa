import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import Util from '../../../../components/util/DateTime';

class Comprobacion extends Component {

    render() {
        return (
            <div class="row">
                <div class="col">
                    <Button type="" icon="send" btnTxt={this.props.btnTxt} />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="Código Orden Pedido"
                        icon="account_balance" id="" value="12345" disabled="true" />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="Nombre"
                        icon="assignment" id="" value="12/12/2020" disabled="true" />
                </div>
                <div class=" col-3 text-center">
                    <Input
                        smallId="" smallTxt="Nombre Corto"
                        icon="assignment" id="" value="12345" disabled="true" />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="Fecha"
                        icon="today" id="" value={Util.date()} disabled="true" />
                </div>


            </div>
        )
    }
};

export default Comprobacion;