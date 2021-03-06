import React, { Component } from 'react';
import Button from '../../../components/ui/buttons/Button';
import Input from '../../../components/ui/input/Input';
import Title from '../../../components/ui/title/Title';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import Axios from 'axios';
import { URL } from '../../util/common';

class EditarMateriaPrima extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            usuario: sessionStorage.getItem('user'),
            selectedRow: this.props.selectedRow
        }
    }

    componentDidMount() {
        this.setState({
            selectedRow: this.props.selectedRow
        });
    }

    handleChange = control => {
        const { name, value } = control;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            _id: this.state.selectedRow,
            TMP_Descripcion: this.state.nombre,
            USU_User: this.state.usuario
        }

        Axios.post(URL.concat(`tipomateriaprima/update/${sessionStorage.getItem('user')}`), { data })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((err) => console.error(err));
    }

    render() {
        const placeholderNombreMateria = counterpart.translate('placeholderNombreMateria');

        return (
            <form onSubmit={this.handleSubmit}>
                <Title title={<Translate content="tituloEditarTipoMateriaPrima" />} titleType="title-form" />
                <div class="row align-items-center">
                    <div class="col pl-5">
                        <Input
                            smallId="" name="nombre" smallTxt={<Translate content="smallNombreMateria" />}
                            icon="title" id="" placeholder={placeholderNombreMateria} type="text" required="true" onChange={(ev) => this.handleChange(ev.target)} />
                    </div>
                </div>
                <div class="text-center">
                    <Button type="submit" icon="send" btnTxt={<Translate content="modalGuardar" />} />
                </div>
            </form>
        )
    }
}

export default EditarMateriaPrima;