import React from "react";
import {Route, Switch} from "react-router-dom";

import eCommerce from "./customViews/eCommerce";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
    <Route path={`${match.url}eCommerce`} component={eCommerce}/>
    </Switch>
  </div>
);

export default App;
