import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';

class NuevoRol extends Component {
    render() {
        return (
            <Card>
                <Title title="Nuevo Rol" titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt="Nombre del nuevo rol"
                                icon="title" id="" placeholder="Nombre del nuevo rol" type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt="Nombre Corto"
                                icon="title" id="" placeholder="Nombre Corto" type="txt" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pr-5 pl-5">
                            <Input
                                smallId="" smallTxt="Descripción"
                                icon="description" id="" placeholder="Descripción" type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt="Código automático del nuevo rol"
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Crear Rol" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoRol;