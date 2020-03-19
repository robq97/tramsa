import React, { Component } from 'react';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import Label from '../ui/label/Label';

const login = (props) => {
    return (
        <div class="card size mx-auto card-center regular shadow">
            <form class="form-group">
                <div class="form-group center_div mb-3">
                    <Label for="username" lblText="Usuario" />
                    <Input type="text" id="username" placeholder="Usuario" smallTxt="Ingrese su usuario" smallId="lblUser" />
                </div>
                <div class="form-group center_div mb-3">
                    <Label for="password" lblText="Contraseña" />
                    <Input type="password" id="password" placeholder="Contraseña" smallTxt="Ingrese su contraseña" smallId="lblPassword" />
                </div>
                <div class="text-center">
                    <Button icon="lock" btnTxt="Iniciar Sesión" />
                </div>
            </form>
        </div>
    )
}


export default login;