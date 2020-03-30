import React from 'react';
import Card from '../../components/ui/card/Card'
import Title from '../../components/ui/title/Title'

const ayuda = (props) => {
    return (
        <Card>
            <Title title="Acerca de" titleType="title-form" />
            <div class="row">
                <div class="col-4 pl-5 text-center">
                    <ul class="list-group">
                        <li class="list-group-item disabled"><b>TRAMESQUIN</b></li>
                        <li class="list-group-item">ULACIT</li>
                        <li class="list-group-item">Diseño Web II</li>
                        <li class="list-group-item">Enero - Abril 2020</li>
                    </ul>
                </div>
                <div class="col-8 pr-5">
                    <ul class="list-group text-center">
                        <li class="list-group-item disabled"><b>Integrantes</b></li>
                        <li class="list-group-item">Roberto Quesada</li>
                        <li class="list-group-item">Cristhian Martínez</li>
                        <li class="list-group-item">Fabián Tenorio</li>
                    </ul>
                </div>
            </div>
            <Title title="Ayuda" titleType="title-form" />
            <div class="pl-5 pr-5 pb-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    <a href="url">Ayuda 1</a>
                    <br />
                    <a href="url">Ayuda 2</a>

                </p>
            </div>
        </Card>
    )
}

export default ayuda;