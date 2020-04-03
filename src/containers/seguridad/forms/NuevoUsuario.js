import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Radio from '../../../components/ui/radio/Radio';
import Select from '../../ui/select/Select';

class NuevoUsuario extends Component {
    render() {
        return (
            <Card>
                <Title title="Nuevo Usuario" titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt="Correo Electrónico"
                                icon="email" id="" placeholder="Correo electrónico" type="email" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Usuario"
                                icon="perm_identity" id="" placeholder="Usuario" type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt="Nombre"
                                icon="perm_identity" id="" placeholder="Nombre" type="txt" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt="Seleccione el rol" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Contraseña"
                                icon="lock" id="" placeholder="Contraseña" type="password" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt="Confirmar Contraseña"
                                icon="lock" id="" placeholder="Confirmar contraseña" type="password" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Radio
                                smallId="" smallTxt="Seleccione un estado"
                                value1="activo" txt1="Activo" value2="inactivo" txt2="Inactivo" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Agregar Usuario" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoUsuario;