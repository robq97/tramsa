import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Card from '../../../components/ui/card/Card';
import Title from '../../../components/ui/title/Title';
import Input from '../../../components/ui/input/Input';

class AperturaCajas extends Component {
    render() {
        return (
            <Card>
                <div>
                    <Title title="Apertura de Cajas" titleType="title-form" />
                    <form>
                        <div class="center_div mb-3">
                            <Input smallId="" smallTxt="Monto inicial del dia"
                                icon="account_balance" type="number" id="" placeholder="12345" required="true" />
                        </div>
                        <div class="text-center">
                            <Button type="" icon="arrow_right_alt" btnTxt="Siguiente" />
                        </div>
                    </form>
                </div>
            </Card>
        )
    }
}
export default AperturaCajas;