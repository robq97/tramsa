import React from 'react';
import Button from '../../ui/buttons/Button';
import Input from '../../ui/input/Input';
import Card from '../../ui/card/Card';
import Title from '../../ui/title/Title';
import Automatic_Code from '../../ui/automaticCode/Automatic_Code'
import Label from '../../ui/label/Label'
import Select from '../../../containers/ui/select/Select'

const nuevoProducto = (props) => {

    return (
        <Card>
            <form>
                <Title title="Nuevo Producto" titleType="title-form" />
                <div class="lbl-padding">
                    <Label for="username" lblText="Maestro" />
                </div>

                <div class="row align-items-center pt-3">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese la descripción"
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col pl-5">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una medida" />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese el punto de re-orden"
                            icon="room" id="" placeholder="Punto de re-orden" type="text" required="true" />
                    </div>
                </div>
                <div class="lbl-padding">
                    <Label for="username" lblText="Detalle" />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Ingrese el código del producto"
                            icon="account_balance" id="" placeholder="Espacio" type="number" required="true" />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese la descripción"
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <Automatic_Code smallId="" smallTxt="Código automático del nuevo producto"
                    id="" placeholder="12345" />
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Agregar Nuevo Producto" />
                </div>
            </form>
        </Card>
    )
}

export default nuevoProducto;