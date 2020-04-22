import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';

class EditarCamion extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Camión" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la placa"
                            icon="title" id="" placeholder="Placa" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre corto"
                            icon="format_size" id="" placeholder="Nombre Corto" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el año"
                            icon="today" id="" placeholder="Año" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la marca"
                            icon="directions_bus" id="" placeholder="Marca" type="text" required="true" />
                    </div>
                </div>
                <div class="row">
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

export default EditarCamion;