import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';

class Consulta extends Component {

    render() {
        return (
            <div class="row">
                <div class="col">
                    <Button type="" icon="filter_list" btnTxt={this.props.btnTxt} />
                </div>
                <div class=" col text-right">
                    <Button type="" icon="filter_list" btnTxt={this.props.btnTxt2} />
                </div>

            </div>
        )
    }
};

export default Consulta;