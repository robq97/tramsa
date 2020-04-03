import React, { Component } from 'react';
import Button from '../../components/ui/buttons/Button';
import Card from '../../components/ui/card/Card';
import Title from '../../components/ui/title/Title';
import Label from '../../components/ui/label/Label';

class ReiniciarSesion extends Component {
    render() {
        return (
            <Card>
                <div>
                    <Title title="Reiniciar Sesión" titleType="title-form" />
                    <form>
                        <div class="text-center mb-3">
                            <Label for="password" lblText="Su sesión será reiniciada." />
                        </div>
                        <div class="text-center">
                            <Button type="" icon="refresh" btnTxt="Reiniciar Sesión" />
                        </div>
                    </form>
                </div>
            </Card>
        )
    }
}
export default ReiniciarSesion;