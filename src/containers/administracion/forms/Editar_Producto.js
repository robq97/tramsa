import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Label from '../../../components/ui/label/Label';

class EditarProducto extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Producto" titleType="title-form" />
                <div class="text-left">
                    <Label for="username" lblText="Maestro" />
                </div>

                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la descripción"
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt="Seleccione una medida" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el punto de re-orden"
                            icon="room" id="" placeholder="Punto de re-orden" type="text" required="true" />
                    </div>
                </div>
                <div class="text-left">
                    <Label for="username" lblText="Detalle" />
                </div>
                <div class="row align-items-center pt-3">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el código del producto"
                            icon="account_balance" id="" placeholder="Espacio" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la descripción"
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Guardar Cambios" />
                </div>
            </form>
        )
    }
}

export default EditarProducto;