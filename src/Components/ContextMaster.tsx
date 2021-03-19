import React from "react";
import { CartContextProvider } from "../Context/CartContext";
import { ProductProvider } from "../Context/ProductContext";
import Layout from "./Layout";

function ContextMaster() {
  return (
    <>
      <ProductProvider>
        <CartContextProvider>
          <Layout />
        </CartContextProvider>
      </ProductProvider>
    </>
  );
}

export default ContextMaster;
