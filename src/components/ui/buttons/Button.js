import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';


const button = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} className="btn navbar-grey bg-dark text-white mb-4 mt-3">
            <i className="icon-align"><MaterialIcon icon={props.icon} color={colorPalette.grey._300} /></i> {props.btnTxt}
        </button>
    );
}


export default button;