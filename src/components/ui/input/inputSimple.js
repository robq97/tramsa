import React from 'react';

const input = (props) => {
    return (
        <div class="mt-1">
            <input type={props.type} class="form-control" id={props.id} aria-describedby="emailHelp" placeholder={props.placeholder}
                disabled={props.disabled} required={props.required} value={props.value} onChange={props.onChange} onFocus={props.onFocus}
                name={props.name} maxLength={props.maxLength} minLength={props.minLength} pattern={props.pattern} />
        </div>
    );
}


export default input;