import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Logaritmos from '../pages/Logaritmos';
import history from '../services/history';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/log" component={Logaritmos} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}
