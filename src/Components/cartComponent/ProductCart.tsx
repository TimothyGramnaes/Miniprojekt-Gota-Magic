import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import CartComponent from "./Cart";
import "./productCart.css";
const ProductCart = () => {
  const cart = useCart();
  if (cart.cart.length > 0) {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item className="productContainer">
          <h2>Din varukorg</h2>

          {cart.cart.map((item) => {
            return <CartComponent item={item} />;
          })}
          <Link className="link-style" to="/BreadCrumbs">
            <Button variant="contained" color="primary">
              Slutför Köp
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  } else
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <h3>Din varukorg är tom!</h3>
      </div>
    );
};
export default ProductCart;
