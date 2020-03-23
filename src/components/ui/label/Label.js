import React from 'react';


const label = (props) => {
    return (
        <label class="mt-3" for={props.for}>{props.lblText}</label>
    );
}


export default label;