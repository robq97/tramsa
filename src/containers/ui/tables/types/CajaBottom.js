import React, { Component } from 'react';
import Input from '../../../../components/ui/input/Input';

class CajaBottom extends Component {

    render() {
        return (
            <div class="pt-3 row">
                <div class="col text-right" />
                <div class="col-4 text-center">
                    <Input
                        smallId="" smallTxt="Caja final"
                        icon="grade" id="" value="12345" disabled="true" />
                </div>
                <div class="col text-right" />
            </div>
        )
    }
};

export default CajaBottom;