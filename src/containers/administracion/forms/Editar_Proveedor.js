import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';

class EditarProveedor extends Component {
    render() {
        return (
            <form>
                <Title title={<Translate content="tituloEditarProveedor" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreProveedor" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallTipoIdentificacionProveedor" />} />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNumeroIdentificacionProveedor" />}
                            icon="featured_video" id="" placeholder="Identificación" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNumeroTelefonoProveedor" />}
                            icon="phone" id="" placeholder="Teléfono" type="tel" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallEmailProveedor" />}
                            icon="featured_video" id="" placeholder="Correo electrónico" type="email" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreContacto" />}
                            icon="title" id="" placeholder="Nombre del contacto" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDireccionProveedor" />}
                            icon="place" id="" placeholder="Dirección" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt={<Translate content="smallTelefonoContacto" />}
                            icon="phone" id="" placeholder="Teléfono contacto" type="tel" required="true" />
                    </div>
                    <div class="col" />

                    <div class="col" />
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarProveedor;