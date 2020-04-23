import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import Select from '../../containers/ui/select/Select';
import IconButton from '../../components/ui/buttons/Icon-Button';
import { colorPalette } from 'material-icons-react';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class Consecutivos extends Component {
    render() {

        const placeholderDescripcion = counterpart.translate('placeholderDescripcion');
        const placeholderValorConsecutivo = counterpart.translate('placeholderValorConsecutivo');
        const placeholderPrefijo = counterpart.translate('placeholderPrefijo');

        return (
            <Card>
                <form>
                    <Title title={<Translate content="tituloConsecutivos" />} titleType="title-form" />
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Select
                                URL="https://swapi.co/api/planets/" property="name"
                                smallId="" smallTxt={<Translate content="smallSeleccioneTipo" />} />
                        </div>
                        <div class="col-sm- text-center">
                            <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallDescripcion" />}
                                icon="description" id="" placeholder={placeholderDescripcion} type="text" required="true" />
                        </div>
                    </div>

                    <hr />

                    <div class="row align-items-center">
                        <div class="col pr-5 pl-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallValorConsecutivo" />}
                                icon="text_rotation_none" id="" placeholder={placeholderValorConsecutivo} type="text" required="true" disabled="true" />
                        </div>
                        <div class="col pl-5 pr-5">
                            <Input
                                smallId="" smallTxt={<Translate content="smallPrefijo" />}
                                icon="short_text" id="" placeholder={placeholderPrefijo} type="text" disabled="true" />
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt={<Translate content="btnGenerarConsecutivo" />} />
                    </div>
                </form>
            </Card>
        )
    }
}

export default Consecutivos;