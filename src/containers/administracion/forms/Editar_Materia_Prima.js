import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'

class EditarMateriaPrima extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Materia Prima" titleType="title-form" />
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la cantidad"
                            icon="filter_1" id="" placeholder="Cantidad" type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una medida" size={6} />
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