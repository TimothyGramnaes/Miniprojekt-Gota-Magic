import { Grid } from "@material-ui/core";
import React from "react";
import { useCart } from "../../Context/CartContext";
import CartComponent from "./Cart";
import "./productCart.css";
const ProductCart = () => {
  const cart = useCart();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item className="productContainer">
        <h2>Dina Produkter</h2>

        {cart.cart.map((item) => {
          return <CartComponent item={item} />;
        })}
      </Grid>
    </Grid>
  );
};
export default ProductCart;
