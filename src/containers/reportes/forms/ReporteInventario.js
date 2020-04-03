import React, { Component } from 'react';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Button from '../../../components/ui/buttons/Button';
import Select from '../../ui/select/Select';
import { Link } from 'react-router-dom';

class ReporteInventario extends Component {
    render() {
        return (
            <Card>
                <Title title="Reporte de Inventarios" titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Select
                            URL="https://swapi.co/api/planets/" property="name" //esta picha no sirve porque hay que pasar un objeto, no un string
                            smallId="" smallTxt="Seleccione una bodega" size={0} />
                    </div>
                    <div class="col pr-5">
                        <div class="text-center">
                            <Link to="/reportes/inventarios/bodega"> <Button type="" icon="send" btnTxt="Generar Reporte" /> </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row align-items-center">
                    <div class="col">
                        <div class="text-center">
                            <Link to="/reportes/inventarios/general"><Button type="" icon="send" btnTxt="Ver Reporte de Inventario General" /></Link>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
export default ReporteInventario;