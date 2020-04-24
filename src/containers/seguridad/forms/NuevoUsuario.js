import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import axios from 'axios';
import { URL } from '../../util/common';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

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

        const placeholderEmailNuevoUsuario = counterpart.translate('placeholderEmailNuevoUsuario');
        const placeholderNuevoUsuario = counterpart.translate('placeholderNuevoUsuario');
        const placeholderNombreNuevoUsuario = counterpart.translate('placeholderNombreNuevoUsuario');
        const placeholderContraseñaNuevoUsuario = counterpart.translate('placeholderContraseñaNuevoUsuario');
        const placeholderConfirmarContrasenaNuevoUsuario = counterpart.translate('placeholderConfirmarContrasenaNuevoUsuario');

        return (
            <Card>
                <Title title={<Translate content="tituloNuevoUsuario" />} titleType="title-form" />
                <form id="create-user-form" onSubmit={this.handleSubmit}>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            <Input
                                smallId="" name="email" smallTxt={<Translate content="smallEmailNuevoUsuario" />}
                                icon="email" id="" placeholder={placeholderEmailNuevoUsuario} type="email" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="userName" smallTxt={<Translate content="smallNuevoUsuario" />}
                                icon="perm_identity" id="" placeholder={placeholderNuevoUsuario} type="text" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="name" smallTxt={<Translate content="smallNombreNuevoUsuario" />}
                                icon="perm_identity" id="" placeholder={placeholderNombreNuevoUsuario} type="txt" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col pl-5">
                            <small>{<Translate content="smallRolNuevoUsuario" />}</small>
                            <div className="input-group mb-4">
                                <select class="form-control" name="rol" onChange={(ev) => this.handleChange(ev.target)}>
                                    {this.state.roles.map((roles) => (
                                        <option key={roles.ROL_Codigo}>{roles.ROL_Nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <Input
                                smallId="" name="password" smallTxt={<Translate content="smallContraseñaNuevoUsuario" />}
                                icon="lock" id="" placeholder={placeholderContraseñaNuevoUsuario} type="password" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                        <div className="col pr-5">
                            <Input
                                smallId="" name="passwordValidation" smallTxt={<Translate content="smallConfirmarContrasenaNuevoUsuario" />}
                                icon="lock" id="" placeholder={placeholderConfirmarContrasenaNuevoUsuario} type="password" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnAgregarNuevoUsuario" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoUsuario;