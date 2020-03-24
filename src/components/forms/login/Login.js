import React from 'react';
import Button from '../../ui/buttons/Button';
import Input from '../../ui/input/Input';
import Label from '../../ui/label/Label';
import Title from '../../ui/title/Title';
import Logo from '../../logo/Logo'

const login = (props) => {
    return (
        <div class="card size mx-auto card-center regular shadow background-login">
            <Title title="Tramesquin" titleType="" />
            <div class="text-center">
                <Logo />
            </div>
            <form>
                <div class="center_div mb-3">
                    <Label for="username" lblText="Usuario" />
                    <Input icon="account_circle" type="text" id="username" placeholder="Usuario" smallTxt="Ingrese su usuario" smallId="lblUser" required="true" />
                </div>
                <div class="center_div mb-3">
                    <Label for="password" lblText="Contraseña" />
                    <Input icon="lock" type="password" id="password" placeholder="Contraseña" smallTxt="Ingrese su contraseña" smallId="lblPassword" required="true" />
                </div>
                <div class="text-center">
                    <Button type="" icon="arrow_forward" btnTxt="Iniciar Sesión" />
                </div>
            </form>
        </div>
    )
}


export default login;