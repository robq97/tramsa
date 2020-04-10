import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import Card from '../../../../components/ui/card/Card';
import Title from '../../../../components/ui/title/Title';
import Select from '../../../../containers/ui/select/Select'
import AutomaticCode from '../../../../components/ui/automaticCode/AutomaticCode';

class PedidoMateriaMaestro extends Component {
    render() {
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
                    <AutomaticCode smallId="" smallTxt="Número de orden"
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="arrow_right_alt" btnTxt="Siguiente" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default PedidoMateriaMaestro;