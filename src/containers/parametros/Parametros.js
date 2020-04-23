import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import Select from '../../containers/ui/select/Select'
import IconButton from '../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../ui/modal/Modal';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class Parametros extends Component {
    render() {

        const placeholderValorCompra = counterpart.translate('placeholderValorCompra');
        const placeholderValorVenta = counterpart.translate('placeholderValorVenta');
        const placeholderNombreCompania = counterpart.translate('placeholderNombreCompania');
        const placeholderMensajeSaludo = counterpart.translate('placeholderMensajeSaludo');
        const placeholderCedulaJuridica = counterpart.translate('placeholderCedulaJuridica');
        const placeholderTelefonoActual = counterpart.translate('placeholderTelefonoActual');
        const placeholderDireccionEstablecimiento = counterpart.translate('placeholderDireccionEstablecimiento');

        return (
            <Card>
                <Modal />
                <form>
                    <Title title={<Translate content="tituloTipoCambio" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallSeleccionaMoneda" />} size={0} />
                        </div>
                        <div class="col-sm- text-center">
                            <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallValorCompra" />}
                                icon="trending_up" id="" placeholder={placeholderValorCompra} type="number" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                        </div>
                        <div class="col-sm- text-center">
                            <IconButton type="" icon="subdirectory_arrow_right" color={colorPalette.grey._700} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallValorVenta" />}
                                icon="trending_up" id="" placeholder={placeholderValorVenta} type="number" required="true" />
                        </div>
                    </div>

                    <hr />

                    <Title title={<Translate content="tituloTiqueteCaja" />} titleType="title-form" />
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCompania" />}
                                icon="business_center" id="" placeholder={placeholderNombreCompania} type="text" />
                        </div>
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallMensajeSaludo" />}
                                icon="message" id="" placeholder={placeholderMensajeSaludo} type="text" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallCedulaJuridica" />}
                                icon="featured_video" id="" placeholder={placeholderCedulaJuridica} type="number" />
                        </div>
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallTelefonoActual" />}
                                icon="phone" id="" placeholder={placeholderTelefonoActual} type="tel" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDireccionEstablecimiento" />}
                                icon="place" id="" placeholder={placeholderDireccionEstablecimiento} type="text" required="true" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Actualizar Información" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default Parametros;