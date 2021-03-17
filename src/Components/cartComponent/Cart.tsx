import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./cartContainer.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useCart } from "../../Context/CartContext";

const CartComponent = () => {
  const cart = useCart();

  return (
    <div className="itemContainer">
      <div className="productImageContainer">
        <div className="img">
          <p></p>
        </div>
      </div>
      <div className="buttonContainer">
        <p>{"dg"}</p>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>+</Button>
          <div className="numberContainer">
            <p>{"item.quantity"}</p>
          </div>
          <Button>-</Button>
        </ButtonGroup>
        <p>{"item.price"}</p>
      </div>
      <div className="iconContainer">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartComponent;
