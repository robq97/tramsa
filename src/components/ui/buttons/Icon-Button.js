import React from 'react';
import MaterialIcon from 'material-icons-react';


const iconButton = (props) => {
    return (
        <button type={props.type} class="btn" data-toggle={props.toggle} data-target={props.target}>
            <i class="icon-align"><MaterialIcon icon={props.icon} color={props.color} /></i>
        </button>
    );
}


export default iconButton;