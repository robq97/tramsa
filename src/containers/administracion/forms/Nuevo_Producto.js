import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Label from '../../../components/ui/label/Label';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';


class NuevoProducto extends Component {
    render() {

        const placeholderNombreProducto = counterpart.translate('placeholderNombreProducto');
        const placeholderDescProducto = counterpart.translate('placeholderDescProducto');
        const placeholderPuntoReorden = counterpart.translate('placeholderPuntoReorden');
        const placeholderCodigoProducto = counterpart.translate('placeholderCodigoProducto');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevoProducto" />} titleType="title-form" />
                    <div class="lbl-padding">
                        <Label for="username" lblText={<Translate content="labelMaestro" />} />
                    </div>

                    <div class="row align-items-center pt-3">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreProducto" />}
                                icon="title" id="" placeholder={placeholderNombreProducto} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDescProducto" />}
                                icon="description" id="" placeholder={placeholderDescProducto} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center pt-3">
                        <div class="col pl-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallMedidaProductos" />} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallPuntoReorden" />}
                                icon="room" id="" placeholder={placeholderPuntoReorden} type="text" required="true" />
                        </div>
                    </div>
                    <div class="lbl-padding">
                        <Label for="username" lblText={<Translate content="labelDetalle" />} />
                    </div>
                    <div class="row align-items-center pt-3">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallCodigoProducto" />}
                                icon="account_balance" id="" placeholder={placeholderCodigoProducto} type="number" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDescProducto" />}
                                icon="description" id="" placeholder={placeholderDescProducto} type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoProducto" />}
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnAgregarNuevoProducto" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoProducto;