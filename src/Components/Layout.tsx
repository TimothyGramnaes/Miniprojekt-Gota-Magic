import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
import BreadCrumbs from "./BreadCrumbs";
import Tournaments from "./Tournaments";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProductCart from "./cartComponent/ProductCart";
//import BreadCrumbs from "./BreadCrumbs";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Tournaments" component={Tournaments} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/ProductCart" component={ProductCart} />
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
