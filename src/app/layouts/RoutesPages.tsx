import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../features/homePage/HomePage';
import Test from './test';

const RoutesPages = ({}) => {
  return (
    // <BrowserRouter>
    <Switch>
      {/* <Route exact path='/' render={() => <Redirect to='/' />} /> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/test' component={Test} />
    </Switch>
    // </BrowserRouter>
  );
};

export default RoutesPages;
