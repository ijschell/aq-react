import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './pages/home';
import Products from './pages/products';
import SobreNosotros from './pages/nosotros';
import WorkOur from './pages/work';
import './App.css';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/products" render={routeProps => <Products {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/our" render={routeProps => <SobreNosotros {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/work-our" render={routeProps => <WorkOur {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
