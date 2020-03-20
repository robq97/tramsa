import React, { Component } from 'react';

const title = (props) => {
    return (
        <div class="text-center mt-4 mb-5 title-color">
            <h2>{props.title}</h2>
        </div>
    )
}

export default title;