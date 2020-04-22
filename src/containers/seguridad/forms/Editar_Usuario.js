import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Radio from '../../../components/ui/radio/Radio';

class EditarUsuario extends Component {
    render() {
        return (
            <form>
                <Title title="Editar Usuario" titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Correo Electrónico"
                                icon="email" id="" placeholder="Correo electrónico" type="email" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Usuario"
                                icon="perm_identity" id="" placeholder="Usuario" type="text" required="true" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Nombre"
                                icon="perm_identity" id="" placeholder="Nombre" type="txt" required="true" />
                        </div>
                    </div>
                    <div class="col">
                        <Select
                            URL="http://apitramsa.azurewebsites.net/rol" type="rol"
                            smallId="" smallTxt="Seleccione el rol" name="option.ROL_Nombre" />
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Contraseña"
                                icon="lock" id="" placeholder="Contraseña" type="password" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Confirmar Contraseña"
                                icon="lock" id="" placeholder="Confirmar contraseña" type="password" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <Radio
                                smallId="" smallTxt="Seleccione un estado"
                                value1="activo" txt1="Activo" value2="inactivo" txt2="Inactivo" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Agregar Usuario" />
                    </div>
                </form>
            </form>
        )
    }
}

export default EditarUsuario;