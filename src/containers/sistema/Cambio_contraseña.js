import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import axios from 'axios';
import { URL } from '../util/common';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';


class CambioContraseña extends Component {

    constructor() {
        super();
        this.state = {
            userName: JSON.parse(sessionStorage.getItem('user')),
            currentPassword: '',
            password: '',
            newPasswordValidation: '',
            oldPasswordValidation: false,
        }
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    validateOldPassword = () => {
        let success = false;

        const data = {
            USU_User: this.state.userName,
            USU_Password: this.state.password
        }

        axios.post(URL.concat('user/login'), data)
            .then(
                this.setState({ oldPasswordValidation: false }),
                success = true
            )
            .catch(error => console.log(error))

        return success;
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
            USU_User: this.state.userName,
            USU_Password: this.state.password
        }

        if (this.validateOldPassword()) {
            if (this.validateEqualPasswords()) {
                axios.post(URL.concat('user/changePassword'), { data })
                    .then((res) => {
                        alert(res.data.message);
                        document.getElementById("password-change-form").reset();
                    })
                    .catch(error => console.error('Error: ', error));
            } else {
                alert('Revise su informacion e intente de nuevo');
            }
        }
    }

    render() {

        const placeholderContraseaActual = counterpart.translate('placeholderContraseaActual');
        const placeholderNuevaContrasena = counterpart.translate('placeholderNuevaContrasena');
        const placeholderConfirmarNuevaContrasena = counterpart.translate('placeholderConfirmarNuevaContrasena');

        return (
            <Card>
                <Title title={<Translate content="tituloCambioContrasena" />} titleType="title-form" />
                <form onSubmit={this.handleSubmit}>
                    <div class="input-padding-25">
                        <Input smallId="lblActualPassword" name="currentPassword" smallTxt={<Translate content="smallContrasenaActual" />}
                            icon="vpn_key" type="password" id="actualPassword" placeholder={placeholderContraseaActual} required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <hr />
                    <div class="input-padding-25">
                        <Input smallId="lblNewPassword" name="password" smallTxt={<Translate content="smallNuevaContrasena" />}
                            icon="lock" type="password" id="newPassword" placeholder={placeholderNuevaContrasena} required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <div class="input-padding-25">
                        <Input smallId="lblNewPasswordConf" name="newPasswordValidation" smallTxt={<Translate content="smallConfirmarNuevaContrasena" />}
                            icon="lock" type="password" id="confirmNewPassword" placeholder={placeholderConfirmarNuevaContrasena} required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>

                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt={<Translate content="btnContrasena" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default CambioContraseña;