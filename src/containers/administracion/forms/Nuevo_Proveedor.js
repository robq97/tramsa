import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevoProveedor extends Component {
    render() {

        const placeholderNombreProveedor = counterpart.translate('placeholderNombreProveedor');
        const placeholderNumeroIdentificacionProveedor = counterpart.translate('placeholderNumeroIdentificacionProveedor');
        const placeholderNumeroTelefonoProveedor = counterpart.translate('placeholderNumeroTelefonoProveedor');
        const placeholderEmailProveedor = counterpart.translate('placeholderEmailProveedor');
        const placeholderNombreContacto = counterpart.translate('placeholderNombreContacto');
        const placeholderDireccionProveedor = counterpart.translate('placeholderDireccionProveedor');
        const placeholderTelefonoContacto = counterpart.translate('placeholderTelefonoContacto');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevoProveedor" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreProveedor" />}
                                icon="title" id="" placeholder={placeholderNombreProveedor} type="text" required="true" />
                        </div>
                        <div class="col">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallTipoIdentificacionProveedor" />} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNumeroIdentificacionProveedor" />}
                                icon="featured_video" id="" placeholder={placeholderNumeroIdentificacionProveedor} type="number" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNumeroTelefonoProveedor" />}
                                icon="phone" id="" placeholder={placeholderNumeroTelefonoProveedor} type="tel" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallEmailProveedor" />}
                                icon="featured_video" id="" placeholder={placeholderEmailProveedor} type="email" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreContacto" />}
                                icon="title" id="" placeholder={placeholderNombreContacto} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallTelefonoContacto" />}
                                icon="phone" id="" placeholder={placeholderTelefonoContacto} type="tel" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDireccionProveedor" />}
                                icon="place" id="" placeholder={placeholderDireccionProveedor} type="text" required="true" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnAgregarNuevoProveedor" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoProveedor;