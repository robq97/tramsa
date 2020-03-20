import React, { Component } from 'react';
import Button from '../../../ui/button/Button';
import Input from '../../../ui/input/Input';
import Card from '../../../ui/card/Card';
import Title from '../../../ui/title/Title';

const cambioContraseña = (props) => {
    return (
        <Card>
            <Title title="Cambio de Contraseña" />
            <div class="input-padding-25">
                <Input icon="vpn_key" type="password" id="actualPassword" placeholder="Contraseña Actual" smallTxt="Ingrese su contraseña actual." smallId="lblActualPassword" />
            </div>
            <hr />
            <div class="input-padding-25">
                <Input icon="lock" type="password" id="newPassword" placeholder="Nueva Contraseña" smallTxt="Ingrese su nueva contraseña." smallId="lblNewPassword" />
            </div>
            <div class="input-padding-25">
                <Input icon="lock" type="password" id="confirmNewPassword" placeholder="Confirmación Contraseña" smallTxt="Confirme su nueva contraseña." smallId="lblNewPasswordConf" />
            </div>
            <div class="text-center">
                <Button icon="send" btnTxt="Cambiar Contraseña" />
            </div>
        </Card>
    )
}


export default cambioContraseña;