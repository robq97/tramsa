import React, { Component } from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';


class Button extends Component {
    render() {
        return (
            <button type="button" class="btn navbar-grey bg-dark text-white">
                <i class="icon-align"><MaterialIcon icon="lock" color={colorPalette.grey._300} /></i> Iniciar Sesion
            </button>
        )
    }
}

export default Button;