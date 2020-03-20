import React, { Component } from 'react';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import Label from '../ui/label/Label';

const login = (props) => {
    return (
        <div class="card size mx-auto card-center regular shadow background-login">
            <form>
                <div class="center_div mb-3">
                    <Label for="username" lblText="Usuario" />
                    <Input icon="account_circle" type="text" id="username" placeholder="Usuario" smallTxt="Ingrese su usuario" smallId="lblUser" />
                </div>
                <div class="center_div mb-3">
                    <Label for="password" lblText="Contraseña" />
                    <Input icon="lock" type="password" id="password" placeholder="Contraseña" smallTxt="Ingrese su contraseña" smallId="lblPassword" />
                </div>
                <div class="text-center">
                    <Button icon="arrow_forward" btnTxt="Iniciar Sesión" />
                </div>
            </form>
        </div>
    )
}


export default login;