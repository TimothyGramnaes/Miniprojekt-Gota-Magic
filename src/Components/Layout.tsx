import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import CartComponent from "./cartComponent/Cart";

function Layout() {
  return (
    <>
      <Header />
      <LandingPage />
      <ProductList />

      <Footer />
    </>
  );
}

export default Layout;
