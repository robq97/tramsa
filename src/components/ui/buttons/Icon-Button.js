import React from 'react';
import MaterialIcon from 'material-icons-react';


const iconButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} className="btn" data-toggle={props.toggle} data-target={props.target}>
            <i className="icon-align"><MaterialIcon icon={props.icon} color={props.color} /></i>
        </button>
    );
}


export default iconButton;