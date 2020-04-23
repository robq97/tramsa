import React from 'react';


const label = (props) => {
    return (
        <label className="mt-3" htmlFor={props.for}>{props.lblText}</label>
    );
}


export default label;