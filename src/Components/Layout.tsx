import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";

function Layout() {
  return (
    <>
      <Header />
      <LandingPage />
      <ProductList />
      <ProductPage />
      <Footer />
    </>
  );
}

export default Layout;
