import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'

class EditarMateriaPrima extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Bodega" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
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
                            smallId="" smallTxt="Ingrese el espacio de la bodega"
                            icon="meeting_room" id="" placeholder="Espacio" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt="Seleccione una medida" />
                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Input
                            smallId="" smallTxt="Ingrese el alias"
                            icon="business_center" id="" placeholder="Alias" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt="Seleccione el tipo de bodega" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la ubicacón"
                            icon="place" id="" placeholder="Ubicación" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Guardar Cambios" />
                </div>
            </form>
        )
    }
}

export default EditarMateriaPrima;