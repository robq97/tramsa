import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevoCamion extends Component {
    render() {

        const placeholderPlaca = counterpart.translate('placeholderPlaca');
        const placeholderNombreCortoCamion = counterpart.translate('placeholderNombreCortoCamion');
        const placeholderMarca = counterpart.translate('placeholderMarca');
        const placeholderDescCamion = counterpart.translate('placeholderDescCamion');
        const placeholderAno = counterpart.translate('placeholderAno');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevoCamion" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallPlaca" />}
                                icon="title" id="" placeholder={placeholderPlaca} type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCortoCamion" />}
                                icon="format_size" id="" placeholder={placeholderNombreCortoCamion} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallMarca" />}
                                icon="directions_bus" id="" placeholder={placeholderMarca} type="text" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDescCamion" />}
                                icon="description" id="" placeholder={placeholderDescCamion} type="text" required="true" />
                        </div>
                        <div class="col-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallAno" />}
                                icon="today" id="" placeholder={placeholderAno} type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoCamion" />}
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnNuevoCamion" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoCamion;