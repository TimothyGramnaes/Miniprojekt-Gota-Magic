import React from "react";
import { CartContextProvider } from "../Context/CartContext";
import { CheckoutProvider } from "../Context/CheckoutContext";
import { ProductProvider } from "../Context/ProductContext";
import Layout from "./Layout";

function ContextMaster() {
  return (
    <>
      <ProductProvider>
        <CheckoutProvider>
          <CartContextProvider>
            <Layout />
          </CartContextProvider>
        </CheckoutProvider>
      </ProductProvider>
    </>
  );
}

export default ContextMaster;
