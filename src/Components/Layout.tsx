import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
 import BreadCrumbs from "./BreadCrumbs";
import Tournaments from "./Tournaments";
// import CheckOut1UserInfo from "./CheckOut1UserInfo";
// import CheckOut2Shipping from "./CheckOut2Shipping";
// import CheckOut3Payment from "./CheckOut3Payment";
// import OrderConfirmation from "./OrderConfirmation";

import { Switch, Route, BrowserRouter } from "react-router-dom";
//import BreadCrumbs from "./BreadCrumbs";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/Tournaments" component={Tournaments} />
      <Route path="/ProductList" component={ProductList} />
       {/* :id is put behind the ProductPage/ to use the id that is put in the link tag in ProductList.tsx */}
       <Route path="/ProductPage/:id" component={ProductPage} />
      </Switch>
      <BreadCrumbs />
      {/* <CheckOut1UserInfo />
      <CheckOut2Shipping />
      <CheckOut3Payment />
      <OrderConfirmation /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
