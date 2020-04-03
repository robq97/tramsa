import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Ayuda from '../Ayuda';

class RouterAyuda extends Component {

    render() {
        return (
            <div>
                <Route path="/ayuda" exact component={Ayuda} />
            </div>
        );
    }
}

export default RouterAyuda;
