import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Admin from "./admin/Admin";
import ClientPage from "./ClientPage";

function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/admin/" component={Admin}/>
        <Route  path="/" component={ClientPage}/>

      
      </Switch>
    </BrowserRouter>
  );
}

export default Layout;
