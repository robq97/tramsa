import React from 'react';

const title = (props) => {
    return (
        <div class={"text-center mt-4 title-color " + props.titleType}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default title;