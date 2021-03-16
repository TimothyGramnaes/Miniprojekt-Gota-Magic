import React from "react";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Header from "./headerComponent/Header";
import ProductPage from "./ProductPage";
import BreadCrumbs from "./BreadCrumbs";
import CheckOut1UserInfo from "./CheckOut1UserInfo";
import CheckOut2Shipping from "./CheckOut2Shipping";
import { CartContextProvider } from "../Context/CartContext";

function Layout() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <BreadCrumbs />
        <LandingPage />
        <ProductList />
        <ProductPage />
        <CheckOut1UserInfo />
        <CheckOut2Shipping />
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default Layout;
