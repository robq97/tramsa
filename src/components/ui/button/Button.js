import React, { Component } from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';


const button = (props) => {
    return (
        <button type="button" class="btn navbar-grey bg-dark text-white mb-3 mt-3">
            <i class="icon-align"><MaterialIcon icon={props.icon} color={colorPalette.grey._300} /></i> {props.btnTxt}
        </button>
    );
}


export default button;