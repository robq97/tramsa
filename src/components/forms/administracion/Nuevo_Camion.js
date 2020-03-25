import React from 'react';
import Button from '../../ui/buttons/Button';
import Input from '../../ui/input/Input';
import Card from '../../ui/card/Card';
import Title from '../../ui/title/Title';
import Automatic_Code from '../../ui/automaticCode/Automatic_Code'

const nuevoCamion = (props) => {

    return (
        <Card>
            <form>
                <Title title="Nuevo Camion " titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Ingrese la placa"
                            icon="title" id="" placeholder="Placa" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre corto"
                            icon="format_size" id="" placeholder="Nombre Corto" type="text" required="true" />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese la marca"
                            icon="directions_bus" id="" placeholder="Marca" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Ingrese el espacio de la bodega"
                            icon="meeting_room" id="" placeholder="Espacio" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la descripción"
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                    <div class="col pr-5" />
                </div>
                <div class="row">
                    <div class="col pl-5 pr-5" />
                </div>
                <Automatic_Code smallId="" smallTxt="Código automático de la nueva bodega"
                    id="" placeholder="12345" />
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Agregar Nuevo Camion" />
                </div>
            </form>
        </Card>
    )
}

export default nuevoCamion;