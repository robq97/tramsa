import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import AutomaticCode from '../../../components/ui/automaticCode/AutomaticCode'
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class NuevaMateriaPrima extends Component {
    render() {

        const placeholderNombreMateria = counterpart.translate('placeholderNombreMateria');
        const placeholderCantidadMateria = counterpart.translate('placeholderCantidadMateria');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloNuevaMateriaPrima" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallNombreMateria" />}
                                icon="title" id="" placeholder={placeholderNombreMateria} type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt={<Translate content="smallCantidadMateria" />}
                                icon="filter_1" id="" placeholder={placeholderCantidadMateria} type="text" required="true" />
                        </div>
                        <div class="col pr-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallMedidaMateria" />} />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt={<Translate content="smallNuevaMateria" />}
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnAgregarNuevaMateria" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default NuevaMateriaPrima;