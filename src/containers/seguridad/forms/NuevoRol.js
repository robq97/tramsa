import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevoRol extends Component {
    render() {

        const placeholderNombreRol = counterpart.translate('placeholderNombreRol');
        const placeholderNombreCortoRol = counterpart.translate('placeholderNombreCortoRol');
        const placeholderDescRol = counterpart.translate('placeholderDescRol');

        return (
            <Card>
                <Title title={<Translate content="tituloNuevoRol" />} titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreRol" />}
                                icon="title" id="" placeholder={placeholderNombreRol} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreCortoRol" />}
                                icon="title" id="" placeholder={placeholderNombreCortoRol} type="txt" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pr-5 pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smalldescRol" />}
                                icon="description" id="" placeholder={placeholderDescRol} type="text" required="true" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevoRol" />}
                        id="" placeholder="12345" />
                    <div class="text-center">btnNuevoRol
                        <Button type="" icon="send" btnTxt={<Translate content="btnNuevoRol" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevoRol;