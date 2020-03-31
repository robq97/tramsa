import React from 'react';

const print = (props) => {
    return (
        <div>
            <ReactToPrint
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.componentRef}
            />
            <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
    )
}

export default print;