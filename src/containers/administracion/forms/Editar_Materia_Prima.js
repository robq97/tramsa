import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';

class EditarMateriaPrima extends Component {
    render() {
        return (
            <form>
                <Title title={<Translate content="tituloEditarMateria" />} titleType="title-form" />
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreMateria" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallCantidadMateria" />}
                            icon="filter_1" id="" placeholder="Cantidad" type="text" required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallMedidaMateria" />} size={6} />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarMateriaPrima;