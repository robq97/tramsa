import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';

class EditarCamion extends Component {
    render() {
        return (
            <form>
                <Title title={<Translate content="tituloEditarCamion" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallPlaca" />}
                            icon="title" id="" placeholder="Placa" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreCortoCamion" />}
                            icon="format_size" id="" placeholder="Nombre Corto" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallAno" />}
                            icon="today" id="" placeholder="Año" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallMarca" />}
                            icon="directions_bus" id="" placeholder="Marca" type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDescCamion" />}
                            icon="description" id="" placeholder="Descripción" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarCamion;