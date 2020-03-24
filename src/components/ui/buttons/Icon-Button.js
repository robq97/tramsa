import React from 'react';
import MaterialIcon from 'material-icons-react';


const iconButton = (props) => {
    return (
        <button type={props.type} class="btn" required>
            <i class="icon-align"><MaterialIcon icon={props.icon} color={props.color} /></i>
        </button>
    );
}


export default iconButton;