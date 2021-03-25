import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
import BreadCrumbs from "./BreadCrumbs";
import Tournaments from "./Tournaments";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProductCart from "./cartComponent/ProductCart";
import CheckOut1UserInfo from "./CheckOut1UserInfo";
//import BreadCrumbs from "./BreadCrumbs";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Tournaments" component={Tournaments} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/ProductCart" component={ProductCart} />
        <Route path="/BreadCrumbs" component={BreadCrumbs} />
        {/* :id is put behind the ProductPage/ to use the id that is put in the link tag in ProductList.tsx */}
        <Route path="/ProductPage/:id" component={ProductPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
