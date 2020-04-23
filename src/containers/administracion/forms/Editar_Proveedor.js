import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'

class EditarProveedor extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Proveedor" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre"
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt="Seleccione el tipo de identificación" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el número de identificación"
                            icon="featured_video" id="" placeholder="Identificación" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el número de teléfono"
                            icon="phone" id="" placeholder="Teléfono" type="tel" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el correo electrónico"
                            icon="featured_video" id="" placeholder="Correo electrónico" type="email" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre del contacto"
                            icon="title" id="" placeholder="Nombre del contacto" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Ingrese la dirección"
                            icon="place" id="" placeholder="Dirección" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese el número de teléfono del contacto"
                            icon="phone" id="" placeholder="Teléfono contacto" type="tel" required="true" />
                    </div>
                    <div class="col" />

                    <div class="col" />
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Guardar Cambios" />
                </div>
            </form>
        )
    }
}

export default EditarProveedor;