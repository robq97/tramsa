import React from 'react';
import Button from '../../../ui/buttons/Button';
import Card from '../../../ui/card/Card';
import Title from '../../../ui/title/Title';
import Label from '../../../ui/label/Label';

const reiniciarSesion = (props) => {
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

export default reiniciarSesion;