import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import { Link } from 'react-router-dom';
import Input from '../../../../components/ui/input/Input';
import Util from '../../../../components/util/DateTime';

class Arqueo extends Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <Link to={this.props.to}>
                            <Button type="" icon="add" btnTxt={this.props.btnTxt} />
                        </Link>
                    </div>
                    <div class=" col-2 text-right">
                        <Input
                            smallId="" smallTxt="Fecha"
                            icon="today" id="" value={Util.date()} disabled="true" />
                    </div>
                    <div class=" col-3 text-right">
                        <Input
                            smallId="" smallTxt="Monto de apertura del día (caja inicial)"
                            icon="monetization_on" id="" value="12345" disabled="true" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Arqueo;