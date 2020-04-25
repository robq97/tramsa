import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class InfoMateriaPrima extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codigo: '',
            descripcion: '',
            nombreCorto: '',
            selectedRow: props.selectedRow
        }
    }

    loadData = () => {
        Axios.get(URL.concat(`/tipomateriaprima/${sessionStorage.getItem('user')}/${this.state.selectedRow}`))
            .then((res) => {
                this.setState({
                    codigo: res.data.TMP_Codigo,
                    descripcion: res.data.TMP_Descripcion,
                    nombreCorto: res.data.TMP_NOM_Corto
                });
            })
            .catch((err) => console.error(err));
    }

    render() {

        return (
            <div>
                <Title title="Tipo Materia Prima" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Input
                            smallId="" name="codigo" smallTxt={<Translate content="smallNombreMateria" />}
                            icon="title" id="" value={this.state.codigo} type="text" required="true" disabled />
                        <Input
                            smallId="" name="descripcion" smallTxt={/*<Translate content="smallNombreMateria" />*/"Descripcion"}
                            icon="title" id="" value={this.state.descripcion} type="text" required="true" disabled />
                        <Input
                            smallId="" name="nombreCorto" smallTxt={/*<Translate content="smallNombreMateria" />*/ " Nombre Corto"}
                            icon="title" id="" value={this.state.nombreCorto} type="text" required="true" disabled />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="button" icon="send" btnTxt="Cargar" onClick={this.loadData} />
                </div>
            </div>
        )

    }
}

export default InfoMateriaPrima;