import React from 'react';
import Button from '../../../ui/buttons/Button';
import Input from '../../../ui/input/Input';
import Card from '../../../ui/card/Card';
import Title from '../../../ui/title/Title';

const cambioContraseña = (props) => {
    return (
        <Card>
            <Title title="Cambio de Contraseña" titleType="title-form" />
            <form>
                <div class="input-padding-25">
                    <Input smallId="lblActualPassword" smallTxt="Ingrese su contraseña actual."
                        icon="vpn_key" type="password" id="actualPassword" placeholder="Contraseña Actual" />
                </div>
                <hr />
                <div class="input-padding-25">
                    <Input smallId="lblNewPassword" smallTxt="Ingrese su nueva contraseña."
                        icon="lock" type="password" id="newPassword" placeholder="Nueva Contraseña" />
                </div>
                <div class="input-padding-25">
                    <Input smallId="lblNewPasswordConf" smallTxt="Confirme su nueva contraseña."
                        icon="lock" type="password" id="confirmNewPassword" placeholder="Confirmación Contraseña" />
                </div>

                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Cambiar Contraseña" />
                </div>
            </form>
        </Card>
    )
}


export default cambioContraseña;