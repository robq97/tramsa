import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import Util from '../../../../components/util/DateTime';

class Cierre extends Component {

    render() {
        return (
            <div class="row">
                <div class="col">
                    <Button type="" icon="picture_as_pdf" btnTxt={this.props.btnTxt} />
                </div>
                <div class=" col-2 text-center">
                    <Input
                        smallId="" smallTxt="Fecha"
                        icon="today" id="" value={Util.date()} disabled="true" />
                </div>
                <div class=" col-3 text-center">
                    <Input
                        smallId="" smallTxt="Monto de apertura del día (caja inicial)"
                        icon="monetization_on" id="" value="12345" disabled="true" />
                </div>
                <div class=" col text-right">
                    <Button type="" icon="print" btnTxt={this.props.btnTxt2} onClick={() => window.print()} />
                </div>
            </div>
        )
    }
};

export default Cierre;