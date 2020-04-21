import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';

const input = (props) => {
    return (
        <div className="mt-1">
            <small id={props.smallId} className="form-text text-muted mb-1">{props.smallTxt}</small>
            <div className="input-group mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><MaterialIcon icon={props.icon} color={colorPalette.grey._700}></MaterialIcon></span>
                </div>
                <input type={props.type} className="form-control" id={props.id} aria-describedby="emailHelp" placeholder={props.placeholder}
                    disabled={props.disabled} required={props.required} value={props.value} onChange={props.onChange} onFocus={props.onFocus}
                    name={props.name} maxLength={props.maxLength} minLength={props.minLength} pattern={props.pattern} />
            </div>
        </div>
    );
}


export default input;