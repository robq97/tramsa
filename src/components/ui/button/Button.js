import React, { Component } from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';


const button = (props) => {
    return (
        <button type="submit" class="btn navbar-grey bg-dark text-white mb-4 mt-3" required>
            <i class="icon-align"><MaterialIcon icon={props.icon} color={colorPalette.grey._300} /></i> {props.btnTxt}
        </button>
    );
}


export default button;