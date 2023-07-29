import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const eCommerce = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/products-list`} />
    <Route path={`${match.url}/product-cart`}
      component={asyncComponent(() => import('./ProductCart'))} />
    <Route path={`${match.url}/product-grid`}
      component={asyncComponent(() => import('./ProductGrid'))} />
    <Route path={`${match.url}/success`}
      component={asyncComponent(() => import('./SuccessPage'))} />
    <Route path={`${match.url}/failure`}
      component={asyncComponent(() => import('./FailurePage'))} />
  </Switch>
);

export default eCommerce;
