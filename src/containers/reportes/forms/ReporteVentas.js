import React, { Component } from 'react';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';

class ReporteVentas extends Component {
    render() {
        return (
            <Card>
                <Title title={<Translate content="tituloReporte" />} titleType="title-form" />
                <div class="row align-items-center pb-5">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt={<Translate content="smallDesde" />}
                            icon="calendar_today" id="" type="date" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt={<Translate content="smallHasta" />}
                            icon="calendar_today" id="" type="date" required="true" />
                    </div>
                    <div class="col pr-5">
                        <div class="text-center">
                            <Link to="/reportes/ventas/general"><Button type="" icon="send" btnTxt={<Translate content="btnGenerarReporte" />} /></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row align-items-center">
                    <div class="col">
                        <div class="text-center">
                            <Link to="/reportes/ventas/precios"><Button type="" icon="send" btnTxt={<Translate content="btnListadoPrecios" />} /></Link>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
export default ReporteVentas;