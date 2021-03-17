import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./cartContainer.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useCart } from "../../Context/CartContext";
import { orderItem } from "../../Types/orderItem";
interface Props {
  item: orderItem;
}

const CartComponent = ({ item }: Props) => {
  const cart = useCart();

  return (
    <div className="itemContainer">
      <div className="productImageContainer">
        <div className="img">
          <p></p>
        </div>
      </div>
      <div className="buttonContainer">
        <p>{item.itemName}</p>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={() => (item.quantity += 1)}>+</Button>
          <div className="numberContainer">
            <p>{item.quantity}</p>
          </div>
          <Button onClick={() => (item.quantity -= 1)}>-</Button>
        </ButtonGroup>
        <p>Price: {item.price}</p>
        <p>Total price: {item.price * item.quantity}</p>
      </div>
      <div className="iconContainer">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartComponent;
