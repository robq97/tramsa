import React from 'react';
import Button from '../../ui/buttons/Button';
import Input from '../../ui/input/Input';
import Card from '../../ui/card/Card';
import Title from '../../ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import IconButton from '../../ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';

const consecutivos = (props) => {

    return (
        <Card>
            <form>
                <Title title="Consecutivos" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione un tipo" />
                    </div>
                    <div class="col-sm- text-center">
                        <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Descripción"
                            icon="description" id="" placeholder="Producto" type="text" required="true" />
                    </div>
                </div>

                <hr />

                <div class="row align-items-center">
                    <div class="col pr-5 pl-5">
                        <Input
                            smallId="" smallTxt="Valor consecutivo"
                            icon="text_rotation_none" id="" placeholder="Valor consecutivo" type="text" required="true" disabled="true" />
                    </div>
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Prefijo"
                            icon="short_text" id="" placeholder="Prefijo" type="text" disabled="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Generar Consecutivo" />
                </div>
            </form>
        </Card>
    )
}

export default consecutivos;