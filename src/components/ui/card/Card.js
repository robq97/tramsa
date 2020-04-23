import React from 'react';

const card = (props) => {
    return (
        <div className="card myCard mx-auto regular shadow mt-5 gradient">
            {props.children}
        </div>
    )
}

export default card;