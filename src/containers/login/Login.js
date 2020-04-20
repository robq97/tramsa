import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Label from '../../components/ui/label/Label';
import Title from '../../components/ui/title/Title';
import Logo from '../../components/logo/Logo';
import axios from 'axios';
import { setUserSession, URL } from '../util/common';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
        }
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit = async event => {
        event.preventDefault();
        const data = {
            userName: this.state.userName,
            password: this.state.password
        }

        await axios.post(URL.concat('user/login'), { data })
            .then((res) => setUserSession(res.data.token, res.data.userName))
            .catch(e => console.error('Error: ', e))
            .then(setTimeout(function() {window.location.reload()}, 550));
    }

    render() {
        return (
            <div className="card size mx-auto card-center regular shadow background-login gradient">
                <Title title="Tramesquin" titleType="" />
                <div class="text-center">
                    <Logo />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="center_div mb-3">
                        <Label htmlFor="username" lblText="Usuario" />
                        <Input name="userName" icon="account_circle" type="text" id="username" placeholder="Usuario" smallTxt="Ingrese su usuario" smallId="lblUser" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <div className="center_div mb-3">
                        <Label htmlFor="password" lblText="Contraseña" />
                        <Input name="password" icon="lock" type="password" id="password" placeholder="Contraseña" smallTxt="Ingrese su contraseña" smallId="lblPassword" required={true} onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                    <div className="text-center">
                        <Button type="submit" icon="arrow_forward" btnTxt="Iniciar Sesión" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;