import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./cartContainer.css";
import DeleteIcon from "@material-ui/icons/Delete";

const CartComponent = () => (
  <div className="cartContainer">
    <div className="itemContainer">
      <div className="productImageContainer">
        <div className="img">
          <p>product-img</p>
        </div>
      </div>
      <div className="buttonContainer">
        <p>Produktnamn</p>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>+</Button>
          <div className="numberContainer">
            <p>3</p>
          </div>
          <Button>-</Button>
        </ButtonGroup>
        <p>Pris: 199</p>
      </div>
      <div className="iconContainer">
        <DeleteIcon />
      </div>
    </div>
    <div className="itemContainer">
      <div className="productImageContainer">
        <div className="img">
          <p>product-img</p>
        </div>
      </div>
      <div className="buttonContainer">
        <p>Produktnamn</p>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>+</Button>
          <div className="numberContainer">
            <p>3</p>
          </div>
          <Button>-</Button>
        </ButtonGroup>
        <p>Pris: 199</p>
      </div>
      <div className="iconContainer">
        <DeleteIcon />
      </div>
    </div>
  </div>
);
export default CartComponent;
