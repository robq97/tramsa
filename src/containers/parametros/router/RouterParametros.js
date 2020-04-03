import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Parametros_Generales from '../Parametros';
import Consecutivos from '../Consecutivos';

class RouterParametros extends Component {

    render() {
        return (
            <div>
                <Route path="/parametros/param-generales" exact component={Parametros_Generales} />
                <Route path="/parametros/consecutivos" exact component={Consecutivos} />
            </div>
        );
    }
}

export default RouterParametros;
