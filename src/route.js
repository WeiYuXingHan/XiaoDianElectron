import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Study from './views/Study/Study';
import Information from './views/Information/Information'
import Ours from './views/Ours/Ours'

const TheRoutes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="study" component={Study} />
    <Route path="/information" component={Information} />
    <Route path="/ours" component={Ours} />
  </Router>
);

export default TheRoutes;
