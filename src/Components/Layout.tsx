import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
import BreadCrumbs from "./BreadCrumbs";
import CheckOut1UserInfo from "./CheckOut1UserInfo";

function Layout() {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <LandingPage />
      <ProductList />
      <ProductPage/>
      {/* <CheckOut1UserInfo /> */}
      <Footer />
    </>
  );
}

export default Layout;
