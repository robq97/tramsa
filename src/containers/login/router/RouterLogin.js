import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login'

class RouterLogin extends Component {
    render() {
        return (
            <Route path="/" exact component={Login} />
        );
    }
}

export default RouterLogin;
