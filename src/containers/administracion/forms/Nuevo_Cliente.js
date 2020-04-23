import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevoCliente extends Component {
    render() {

        const placeholderNombreCliente = counterpart.translate('placeholderNombreCliente');
        const placeholderPrimerApellido = counterpart.translate('placeholderPrimerApellido');
        const placeholderNumeroIdentificacion = counterpart.translate('placeholderNumeroIdentificacion');
        const placeholderNumeroTelefono = counterpart.translate('placeholderNumeroTelefono');
        const placeholderEmail = counterpart.translate('placeholderEmail');
        const placeholderDireccion = counterpart.translate('placeholderDireccion');
        const placeholderSegundoApellido = counterpart.translate('placeholderSegundoApellido');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevoCliente" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCliente" />}
                                icon="title" id="" placeholder={placeholderNombreCliente} type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallPrimerApellido" />}
                                icon="format_size" id="" placeholder={placeholderPrimerApellido} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallSegundoApellido" />}
                                icon="format_size" id="" placeholder={placeholderSegundoApellido} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallTipoIdentificacion" />} />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNumeroIdentificacion" />}
                                icon="featured_video" id="" placeholder={placeholderNumeroIdentificacion} type="number" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNumeroTelefono" />}
                                icon="phone" id="" placeholder={placeholderNumeroTelefono} type="tel" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallEmail" />}
                                icon="featured_video" id="" placeholder={placeholderEmail} type="email" required="true" />
                        </div>
                        <div class="col">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallEstadoCliente" />} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallFechaIngreso" />}
                                icon="calendar_today" id="" placeholder="" type="date" required="true" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDireccion" />}
                                icon="place" id="" placeholder={placeholderDireccion} type="text" required="true" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnAgregarNuevoCliente" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoCliente;