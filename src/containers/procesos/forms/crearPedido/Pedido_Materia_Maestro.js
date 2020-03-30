import React from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Select from '../../../containers/ui/select/Select'
import Automatic_Code from '../../../components/ui/automaticCode/Automatic_Code'

const pedidoMateriaMaestro = (props) => {
    return (
        <Card>
            <Title title="Nuevo Pedido" titleType="title-form" />
            <form>
                <div class="input-padding-25">
                    <Input
                        smallId="lblActualPassword" smallTxt="Ingrese la fecha de la orden"
                        icon="today" type="date" id="" placeholder="Fecha de la oden" required="true" />
                </div>
                <div class="input-padding-25">
                    <Select
                        URL="https://swapi.co/api/planets/" property="name"
                        smallId="" smallTxt="Seleccione el proveedor" />
                </div>
                <Automatic_Code smallId="" smallTxt="Número de orden"
                    id="" placeholder="12345" />
                <div class="text-center">
                    <Button type="" icon="arrow_right_alt" btnTxt="Siguiente" />
                </div>
            </form>
        </Card>
    )
}


export default pedidoMateriaMaestro;