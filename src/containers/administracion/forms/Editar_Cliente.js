import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';

class EditarCliente extends Component {
    render() {
        return (
            <form>
                <Title title={<Translate content="tituloEditarCliente" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreCliente" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallPrimerApellido" />}
                            icon="format_size" id="" placeholder="Primer Apellido" type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallSegundoApellido" />}
                            icon="format_size" id="" placeholder="Segundo Apellido" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallTipoIdentificacion" />} />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNumeroIdentificacion" />}
                            icon="featured_video" id="" placeholder="Identificación" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNumeroTelefono" />}
                            icon="phone" id="" placeholder="Teléfono" type="tel" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallEmail" />}
                            icon="featured_video" id="" placeholder="Correo electrónico" type="email" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallEstadoCliente" />} />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallFechaIngreso" />}
                            icon="calendar_today" id="" placeholder="Teléfono" type="date" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDireccion" />}
                            icon="place" id="" placeholder="Dirección" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarCliente;