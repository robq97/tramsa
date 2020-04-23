import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Label from '../../../components/ui/label/Label';
import Translate from 'react-translate-component';

class EditarProducto extends Component {
    render() {
        return (
            < form >
                <Title title={<Translate content="tituloEditarProducto" />} titleType="title-form" />
                <div class="text-left">
                    <Label for="username" lblText={<Translate content="labelMaestro" />} />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreProducto" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDescProducto" />}
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallMedidaProductos" />} />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallPuntoReorden" />}
                            icon="room" id="" placeholder="Punto de re-orden" type="text" required="true" />
                    </div>
                </div>
                <div class="text-left">
                    <Label for="username" lblText={<Translate content="labelDetalle" />} />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallCodigoProducto" />}
                            icon="account_balance" id="" placeholder="Código" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDescProducto" />}
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form >
        )
    }
}

export default EditarProducto;