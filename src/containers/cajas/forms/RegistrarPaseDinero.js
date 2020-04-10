import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Input from '../../../components/ui/input/Input';
import Select from '../../ui/select/Select';

class RegistrarPaseDinero extends Component {
    render() {
        return (
            <Card>
                <div>
                    <Title title="Registrar Pase de Dinero" titleType="title-form" />
                    <form>
                        <div class="row align-items-center">
                            <div class="col pl-5">
                                <Select
                                    URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                                    smallId="" smallTxt="Indicador de Movimiento" />
                            </div>
                            <div class="col-sm- text-center">
                                <Input
                                    smallId="" smallTxt="Fecha del pase"
                                    icon="trending_up" id="" type="date" required="true" />
                            </div>
                            <div class="col pr-5">
                                <Input
                                    smallId="" smallTxt="Monto (₡)"
                                    icon="trending_up" id="" placeholder="Monto" type="number" required="true" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col text-center">
                                <Button type="" icon="send" btnTxt="Registar Pase" />
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        )
    }
}
export default RegistrarPaseDinero;