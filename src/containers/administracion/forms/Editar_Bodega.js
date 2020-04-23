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
                <Title title={<Translate content="tituloEditarBodega" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallAliasBodega" />}
                            icon="title" id="" placeholder="Nombre" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallNombreCortoBodega" />}
                            icon="format_size" id="" placeholder="Nombre Corto" type="text" required="true" />
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallEspacioBodega" />}
                            icon="meeting_room" id="" placeholder="Espacio" type="number" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallMedidaBodega" />} />
                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Input
                            smallId="" smallTxt={<Translate content="smallAliasBodega" />}
                            icon="business_center" id="" placeholder="Alias" type="text" required="true" />
                    </div>
                    <div class="col">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name"
                            smallId="" smallTxt={<Translate content="smallTipoBodega" />} />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallUbicacionBodega" />}
                            icon="place" id="" placeholder="Ubicación" type="text" required="true" />
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