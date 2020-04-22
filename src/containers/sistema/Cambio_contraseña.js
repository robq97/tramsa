import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';


class CambioContraseña extends Component {
    render() {

        const placeholderContraseaActual = counterpart.translate('placeholderContraseaActual');
        const placeholderNuevaContrasena = counterpart.translate('placeholderNuevaContrasena');
        const placeholderConfirmarNuevaContrasena = counterpart.translate('placeholderConfirmarNuevaContrasena');

        return (
            <Card>
                <Title title={<Translate content="tituloCambioContrasena" />} titleType="title-form" />
                <form>
                    <div class="input-padding-25">
                        <Input smallId="lblActualPassword" smallTxt={<Translate content="smallContrasenaActual" />}
                            icon="vpn_key" type="password" id="actualPassword" placeholder={placeholderContraseaActual} required="true" />
                    </div>
                    <hr />
                    <div class="input-padding-25">
                        <Input smallId="lblNewPassword" smallTxt={<Translate content="smallNuevaContrasena" />}
                            icon="lock" type="password" id="newPassword" placeholder={placeholderNuevaContrasena} required="true" />
                    </div>
                    <div class="input-padding-25">
                        <Input smallId="lblNewPasswordConf" smallTxt={<Translate content="smallConfirmarNuevaContrasena" />}
                            icon="lock" type="password" id="confirmNewPassword" placeholder={placeholderConfirmarNuevaContrasena} required="true" />
                    </div>

                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnContrasena" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default CambioContraseña;