import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import axios from 'axios';
import { URL } from '../util/common';

class CambioContraseña extends Component {

    constructor() {
        super();
        this.state = {
            userName: sessionStorage.getItem('user'),
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
            userName: this.state.userName,
            password: this.state.password
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
            userName: this.state.userName,
            currentPassword: this.state.currentPassword,
            password: this.state.password
        }

        if (this.validateOldPassword) {
            if (this.validateEqualPasswords) {
                axios.post(URL.concat('user/update'), data)
                    .catch(error => console.error('Error: ', error))
                    .then(alert("Contraseña actualizada correctamente"));
            } else {
                alert('Revise su informacion e intente de nuevo');
            }
        }
    }

    render() {
        return (
            <Card>
                <Title title="Cambio de Contraseña" titleType="title-form" />
                <form onSubmit={this.handleSubmit}>
                    <div class="input-padding-25">
                        <Input name="currentPassword" smallId="lblActualPassword" smallTxt="Ingrese su contraseña actual."
                            icon="vpn_key" type="password" id="actualPassword" placeholder="Contraseña Actual" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <hr />
                    <div class="input-padding-25">
                        <Input name="password" smallId="lblNewPassword" smallTxt="Ingrese su nueva contraseña."
                            icon="lock" type="password" id="newPassword" placeholder="Nueva Contraseña" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <div class="input-padding-25">
                        <Input smallId="lblNewPasswordConf" smallTxt="Confirme su nueva contraseña."
                            icon="lock" type="password" id="confirmNewPassword" placeholder="Confirmación Contraseña" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>

                    <div class="text-center">
                        <Button type="submit" icon="send" btnTxt="Cambiar Contraseña" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default CambioContraseña;