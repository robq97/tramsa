import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
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
            rol: ''
        }
    }

    componentDidMount() {
        axios.get(URL.concat('rol'))
            .then((response) => this.setState({
                roles: response.data
            }));
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    validateEqualPasswords = () => {
        if (this.state.password === this.state.passwordValidation) {
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
            axios.post(URL.concat('user/signup'), { data })
                .then((res) => {
                    alert(res.data.message);
                    document.getElementById("create-user-form").reset();
                })
                .catch(error => console.error('Error: ', error));
        } else {
            console.log(data);
            alert('Las conrtaseñas no coinciden');
        }

    }

    render() {
        return (
            <Card>
                <Title title="Nuevo Usuario" titleType="title-form" />
                <form id="create-user-form" onSubmit={this.handleSubmit}>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            <Input
                                smallId="" name="email" smallTxt="Correo Electrónico"
                                icon="email" id="" placeholder="Correo electrónico" type="email" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="userName" smallTxt="Usuario"
                                icon="perm_identity" id="" placeholder="Usuario" type="text" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="name" smallTxt="Nombre"
                                icon="perm_identity" id="" placeholder="Nombre" type="txt" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            {/*<Select
                                URL={URL.concat('rol')} name="rol" property="ROL_Nombre"
                            smallId="ROL_Nombre" smallTxt="Seleccione el rol" />*/}
                            <small>Rol</small>
                            <select name="rol" onChange={(ev) => this.handleChange(ev.target)}>
                                {this.state.roles.map((roles) => (
                                    <option key={roles.ROL_Codigo}>{roles.ROL_Nombre}</option>
                                ))}
                            </select>

                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="password" smallTxt="Contraseña"
                                icon="lock" id="" placeholder="Contraseña" type="password" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="passwordValidation" smallTxt="Confirmar Contraseña"
                                icon="lock" id="" placeholder="Confirmar contraseña" type="password" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            {/*<Radio
                                smallId="" name="status" smallTxt="Seleccione un estado"
                            value1="activo" txt1="Activo" value2="inactivo" txt2="Inactivo" onChange={(ev) => this.handleChange(ev.target)}/>*/}
                            <small>Estado</small>
                            <select name="estado" onChange={(ev) => this.handleChange(ev.target)}>
                                <option name="Activo" value="Activo">Activo</option>
                                <option name="Inactivo" value="Inactivo">Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type="submit" icon="send" btnTxt="Agregar Usuario" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoUsuario;