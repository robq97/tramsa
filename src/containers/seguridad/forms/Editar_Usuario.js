import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Radio from '../../../components/ui/radio/Radio';
import Translate from 'react-translate-component';

class EditarUsuario extends Component {
    render() {
        return (
            <form>
                <Title title={<Translate content="tituloEditarNuevoUsuario" />} titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallEmailNuevoUsuario" />}
                                icon="email" id="" placeholder="Correo electrónico" type="email" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNuevoUsuario" />}
                                icon="perm_identity" id="" placeholder="Usuario" type="text" required="true" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreNuevoUsuario" />}
                                icon="perm_identity" id="" placeholder="Nombre" type="txt" required="true" />
                        </div>
                    </div>
                    <div class="col">
                        <Select
                            URL="http://apitramsa.azurewebsites.net/rol" type="rol"
                            smallId="" smallTxt={<Translate content="smallRolNuevoUsuario" />} name="option.ROL_Nombre" />
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallContraseñaNuevoUsuario" />}
                                icon="lock" id="" placeholder="Contraseña" type="password" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallConfirmarContrasenaNuevoUsuario" />}
                                icon="lock" id="" placeholder="Confirmar contraseña" type="password" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <Radio
                                smallId="" smallTxt={<Translate content="smallEstadoUsuario" />}
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