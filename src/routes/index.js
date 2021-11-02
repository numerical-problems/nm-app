import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logaritmos from "../pages/Logaritmos";
import Derivadas from "../pages/Derivadas";
import Fourier from "../pages/Fourier";
import Interpolacao from "../pages/Interpolacao";
import history from "../services/history";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/log' component={Logaritmos} />
        <Route path='/' exact component={Home} />
        <Route path='/derivadas' component={Derivadas} />
        <Route path='/fourier' component={Fourier} />
        <Route path='/interpolation' component={Interpolacao} />
      </Switch>
    </Router>
  );
}
