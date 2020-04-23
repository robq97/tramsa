import React from 'react';


const label = (props) => {
    return (
        <div>
            <small id={props.smallId} className="form-text text-muted mb-1">{props.smallTxt}</small>
            <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={props.value1} checked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        {props.txt1}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={props.value2} />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        {props.txt2}
                    </label>
                </div>
            </div>
        </div>
    );
}


export default label;