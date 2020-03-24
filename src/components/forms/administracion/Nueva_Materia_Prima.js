import React from 'react';
import Button from '../../ui/buttons/Button';
import Input from '../../ui/input/Input';
import Card from '../../ui/card/Card';
import Title from '../../ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Automatic_Code from '../../ui/automaticCode/Automatic_Code'

const nuevaMateriaPrima = (props) => {

    return (
        <Card>
            <form>
                <Title title="Nueva Materia Prima" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la cantidad"
                            icon="filter_1" id="" placeholder="Cantidad" type="text" required="true" />
                    </div>
                    <div class="col pr-5">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una medida" />
                    </div>
                </div>
                <Automatic_Code smallId="" smallTxt="Código automático de la nueva materia prima"
                    id="" placeholder="12345" />
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Agregar Nueva Materia Prima" />
                </div>
            </form>
        </Card>
    )
}

export default nuevaMateriaPrima;