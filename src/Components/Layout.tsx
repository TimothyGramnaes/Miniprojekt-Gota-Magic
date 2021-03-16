import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
import BreadCrumbs from "./BreadCrumbs";
import CheckOut1UserInfo from "./CheckOut1UserInfo";
import CheckOut2Shipping from "./CheckOut2Shipping";
import CheckOut3Payment from "./CheckOut3Payment";

function Layout() {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <LandingPage />
      <ProductList />
      <ProductPage/>
      <CheckOut1UserInfo />
      <CheckOut2Shipping />
      <CheckOut3Payment />
      <Footer />
    </>
  );
}

export default Layout;
