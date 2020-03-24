import React from 'react';
import Input from '../input/Input';

const automaticCode = (props) => {
    return (
        <div>
            <hr />
            <div class="row align-items-center">
                <div class="col pl-5" />
                <div class="col-md-5">
                    <Input
                        smallId={props.smallId} smallTxt={props.smallTxt}
                        icon="looks_one" id={props.id} placeholder={props.placeholder} type="text" disabled="true" />
                </div>
                <div class="col pr-5" />
            </div>
        </div>
    )
}

export default automaticCode;