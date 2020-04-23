import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../ui/select/Select'
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode'
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevaBodega extends Component {
    render() {

        const placeholderNombreBodega = counterpart.translate('placeholderNombreBodega');
        const placeholderNombreCorto = counterpart.translate('placeholderNombreCorto');
        const placeholderAliasBodega = counterpart.translate('placeholderAliasBodega');
        const placeholderEspacioBodega = counterpart.translate('placeholderEspacioBodega');
        const placeholderUbicacionBodega = counterpart.translate('placeholderUbicacionBodega');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevaBodega" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreBodega" />}
                                icon="title" id="" placeholder={placeholderNombreBodega} type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCortoBodega" />}
                                icon="format_size" id="" placeholder={placeholderNombreCorto} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallAliasBodega" />}
                                icon="business_center" id="" placeholder={placeholderAliasBodega} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallEspacioBodega" />}
                                icon="meeting_room" id="" placeholder={placeholderEspacioBodega} type="number" required="true" />
                        </div>
                        <div class="col">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallMedidaBodega" />} />
                        </div>
                        <div class="col pr-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallTipoBodega" />} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallUbicacionBodega" />}
                                icon="place" id="" placeholder={placeholderUbicacionBodega} type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevaBodega" />}
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnNuevaBodega" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevaBodega;