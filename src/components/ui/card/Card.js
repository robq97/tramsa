import React, { Component } from 'react';

const card = (props) => {
    return (
        <div class="card myCard mx-auto regular shadow mt-5">
            {props.children}
        </div>
    )
}

export default card;