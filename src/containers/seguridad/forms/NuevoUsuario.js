import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Radio from '../../../components/ui/radio/Radio';
import Select from '../../ui/select/Select';
import axios from 'axios';
import { URL } from '../../util/common';

class NuevoUsuario extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            userName: '',
            name: '',
            password: '',
            passwordValidation: '',
            status: '',
            roles: [],
            role: ''
        }
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    validateEqualPasswords = () => {
        if (this.state.password === this.state.newPasswordValidation) {
            return true;
        } else {
            return false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            USU_Email: this.state.email,
            USU_User: this.state.userName,
            USU_Password: this.state.password,
            USU_Estado: this.state.status,
            USU_Nombre: this.state.name,
            USU_Rol: this.state.rol
        }

        if (this.validateEqualPasswords()) {
            axios.post(URL.concat('user/create'), { data })
                .then((res) => {
                    alert(res.data.message);
                    document.getElementById("create-user-form").reset();
                })
                .catch(error => console.error('Error: ', error));
        } else {
            alert('Las conrtaseñas no coinciden');
        }

    }

    render() {
        return (
            <Card>
                <Title title="Nuevo Usuario" titleType="title-form" />
                <form id="create-user-form">
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            <Input
                                smallId="" name="email" smallTxt="Correo Electrónico"
                                icon="email" id="" placeholder="Correo electrónico" type="email" required={true} />
                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="userName" smallTxt="Usuario"
                                icon="perm_identity" id="" placeholder="Usuario" type="text" required={true} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="name" smallTxt="Nombre"
                                icon="perm_identity" id="" placeholder="Nombre" type="txt" required={true} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            {this.state.roles.map((roles) => (
                                <h1>{roles}</h1>
                            ))}
                            <Select
                                URL={URL.concat('rol')} name="rol" property="ROL_Nombre"
                                smallId="" smallTxt="Seleccione el rol" />
                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="password" smallTxt="Contraseña"
                                icon="lock" id="" placeholder="Contraseña" type="password" required={true} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="passwordValidation" smallTxt="Confirmar Contraseña"
                                icon="lock" id="" placeholder="Confirmar contraseña" type="password" required={true} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            <Radio
                                smallId="" name="status" smallTxt="Seleccione un estado"
                                value1="activo" txt1="Activo" value2="inactivo" txt2="Inactivo" />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type="" icon="send" btnTxt="Agregar Usuario" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoUsuario;