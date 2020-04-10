import React, { Component } from 'react';
import Button from '../../../../components/ui/buttons/Button';
import Input from '../../../../components/ui/input/Input';
import Card from '../../../../components/ui/card/Card';
import Title from '../../../../components/ui/title/Title';
import AutomaticCode from '../../../../components/ui/automaticCode/AutomaticCode';
import Radio from '../../../../components/ui/radio/Radio';

class PedidoMateriaDetalle extends Component {
    render() {
        return (
            <Card>
                <Title title="Nuevo Pedido" titleType="title-form" />
                <form>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Input
                                smallId="" smallTxt="Código de materia prima"
                                icon="account_balance" id="" placeholder="12345" type="text" required="true" />
                        </div>
                        <div class="col">
                            <Input
                                smallId="" smallTxt="Nombre de la materia prima"
                                icon="assignment" id="" placeholder="Nombre materia prima" type="text" required="true" disabled="true" />
                        </div>
                        <div class="col pr-5">
                            <Input
                                smallId="" smallTxt="Ingrese la cantidad"
                                icon="filter_1" id="" placeholder="Cantidad" type="number" required="true" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col pl-5">
                            <Radio
                                smallId="" smallTxt="Seleccione un estado"
                                value1="pendiente" txt1="Pendiente" value2="entregado" txt2="Entregado" />
                        </div>
                    </div>
                    <AutomaticCode smallId="" smallTxt="Código orden de pedido"
                        id="" placeholder="12345" />
                    <div class="text-center">
                        <Button type="" icon="send" btnTxt="Agregar Pedido" />
                    </div>
                </form>
            </Card>
        )
    }
}

export default PedidoMateriaDetalle;