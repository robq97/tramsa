import React, { Component } from 'react';

const input = (props) => {
    return (
        <div>
            <small id={props.smallId} class="form-text text-muted mb-1">{props.smallTxt}</small>
            <input type={props.type} class="form-control" id={props.id} aria-describedby="emailHelp" placeholder={props.placeholder}></input>
        </div>);
}


export default input;