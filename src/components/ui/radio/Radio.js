import React from 'react';


const label = (props) => {
    return (
        <div>
            <small id={props.smallId} class="form-text text-muted mb-1">{props.smallTxt}</small>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={props.value1} checked />
                    <label class="form-check-label" for="gridRadios1">
                        {props.txt1}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={props.value2} />
                    <label class="form-check-label" for="gridRadios2">
                        {props.txt2}
                    </label>
                </div>
            </div>
        </div>
    );
}


export default label;