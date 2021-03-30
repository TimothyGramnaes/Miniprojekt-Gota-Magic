import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Admin from "./admin/Admin";
import ClientPage from "./ClientPage";
import LandingPage from "./LandingPage";

function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ClientPage}/>

        <Route  path="/admin/" component={Admin}/>
      
      </Switch>
    </BrowserRouter>
  );
}

export default Layout;
