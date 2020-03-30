import React from 'react';
import Button from '../../components/ui/buttons/Button';
import Input from '../../components/ui/input/Input';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import Select from '../../containers/ui/select/Select'
import IconButton from '../../components/ui/buttons/Icon-Button'
import { colorPalette } from 'material-icons-react';
import Modal from '../ui/modal/Modal';

const parametros = (props) => {

    return (
        <Card>
            <Modal />
            <form>
                <Title title="Tipo de Cambio" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una moneda" size={0} />
                    </div>
                    <div class="col-sm- text-center">
                        <IconButton type="" icon="arrow_forward" color={colorPalette.grey._700} />
                    </div>
                    <div class="col pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese un valor para cambiar el valor de compra (₡)"
                            icon="trending_up" id="" placeholder="Valor de compra" type="number" required="true" />
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
                            smallId="" smallTxt="Ingrese un valor para cambiar el valor de venta  (₡)"
                            icon="trending_up" id="" placeholder="Valor de venta" type="number" required="true" />
                    </div>
                </div>

                <hr />

                <Title title="Tiquete de caja" titleType="title-form" />
                <div class="row">
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese el nombre de la compañia"
                            icon="business_center" id="" placeholder="Nombre actual de la compañia" type="text" />
                    </div>
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese un mensaje de saludo"
                            icon="message" id="" placeholder="Mensaje actual" type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese la cédula jurídica"
                            icon="featured_video" id="" placeholder="Número de ced jurídica actual" type="number" />
                    </div>
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese el número de teléfono"
                            icon="phone" id="" placeholder="Número de teléfono actual" type="tel" />
                    </div>
                </div>
                <div class="row">
                    <div class="col pl-5 pr-5">
                        <Input
                            smallId="" smallTxt="Ingrese la dirección del establecimiento"
                            icon="place" id="" placeholder="Dirección actual" type="text" required="true" />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="" icon="send" btnTxt="Actualizar Información" />
                </div>
            </form>
        </Card>
    )
}

export default parametros;