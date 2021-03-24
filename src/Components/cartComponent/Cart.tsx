import React, { useEffect } from "react";
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

  const decreaseProduct = () => {
    if (item.quantity >= 2) item.quantity -= 1;
    else {
      return;
    }
  };

  return (
    <div className="itemContainer">
      <div className="productImageContainer">
        <img className="img" src={item.img} alt="" />
      </div>
      <div>
        <p>
          <strong>Produkt:</strong> {item.itemName}
        </p>
        <p>
          <strong>Pris: </strong>
          {item.price}
        </p>
        <p>
          <strong>Total pris:</strong> {item.price * item.quantity}
        </p>
      </div>
      <div className="buttonContainer">
        <p>
          <strong>Antal</strong>
        </p>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            onClick={() => cart.addToCart(item.itemName, item.price, item.img)}
          >
            +
          </Button>
          <div className="numberContainer">
            <p>{item.quantity}</p>
          </div>
          <Button onClick={() => cart.decreaseQuantity(item)}>-</Button>
        </ButtonGroup>
      </div>
      <div className="iconContainer">
        <DeleteIcon onClick={() => cart.removeFromCart(item.itemName)} />
      </div>
    </div>
  );
};

export default CartComponent;
