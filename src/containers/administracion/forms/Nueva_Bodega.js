import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../ui/select/Select'
import Automatic_Code from '../../../components/ui/automaticCode/AutomaticCode'

class NuevaBodega extends Component {
    render() {
        return (
            <Card>
                <form>
                    <Title title="Nueva Bodega" titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt="Ingrese el nombre"
                                icon="title" id="" placeholder="Nombre" type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Ingrese el nombre corto"
                                icon="format_size" id="" placeholder="Nombre Corto" type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese el alias"
                                icon="business_center" id="" placeholder="Alias" type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt="Ingrese el espacio de la bodega"
                                icon="meeting_room" id="" placeholder="Espacio" type="number" required="true" />
                        </div>
                        <div class="col">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                                smallId="" smallTxt="Seleccione una medida" />
                        </div>
                        <div class="col pr-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                                smallId="" smallTxt="Seleccione el tipo de bodega" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese la ubicacón"
                                icon="place" id="" placeholder="Ubicación" type="text" required="true" />
                        </div>
                    </div>
                    <Automatic_Code smallId="" smallTxt="Código automático de la nueva bodega"
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Agregar Nueva Materia Prima" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevaBodega;