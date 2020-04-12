import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import AutomaticCode from '../../../../components/ui/automaticCode/AutomaticCode';
import { Link } from 'react-router-dom';

class VentaBottom extends Component {

    render() {
        return (
            <div>
                <div class="pt-2 row">
                    <div class="col text-center">
                        <Input
                            smallId="" smallTxt="Impuesto"
                            icon="grade" id="" value="12345" disabled="true" />
                    </div >
                    <div class="col text-right" />
                    <div class="col-4 text-center">
                        <Input
                            smallId="" smallTxt="Subtotal"
                            icon="grade" id="" value="12345" disabled="true" />
                    </div>

                </div>
                <div class="row">
                    <div class="col">
                        <AutomaticCode smallId="" smallTxt="Monto Final"
                            id="" placeholder="12345" />
                    </div>
                </div >
                <div>
                    <div class=" col text-center">
                        <Link to={this.props.to}>
                            <Button type="" icon="payment" btnTxt={this.props.btnTxt2} to={this.props.to} />
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
};

export default VentaBottom;