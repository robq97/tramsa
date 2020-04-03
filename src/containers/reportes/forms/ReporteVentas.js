import React, { Component } from 'react';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import { Link } from 'react-router-dom';

class ReporteVentas extends Component {
    render() {
        return (
            <Card>
                <Title title="Reporte de Ventas" titleType="title-form" />
                <div class="row align-items-center pb-5">
                    <div class="col pl-5">
                        <Input
                            smallId="" smallTxt="Desde"
                            icon="calendar_today" id="" type="date" required="true" />
                    </div>
                    <div class="col">
                        <Input
                            smallId="" smallTxt="Hasta"
                            icon="calendar_today" id="" type="date" required="true" />
                    </div>
                    <div class="col pr-5">
                        <div class="text-center">
                            <Link to="/reportes/ventas/general"><Button type="" icon="send" btnTxt="Generar Reporte" /></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row align-items-center">
                    <div class="col">
                        <div class="text-center">
                            <Link to="/reportes/ventas/precios"><Button type="" icon="send" btnTxt="Ver Listado de Precios" /></Link>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
export default ReporteVentas;