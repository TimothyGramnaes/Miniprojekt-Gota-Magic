import TextField from "@material-ui/core/TextField";
import "../css/checkOut2Shipping.css";
import "../main.css";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ShippingMethod, shippingMethods } from "../DB/ShippingMethods";
import { useCheckoutContext } from "../Context/CheckoutContext";
import CartComponent from "./cartComponent/Cart";
import { useCart } from "../Context/CartContext";

function CheckOut2Shipping() {
  const checkout = useCheckoutContext();
  const cart = useCart();
  const [value, setValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [deliveryTime, setDeliveryTime] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRadioChange(value);
  };

  const setRadioChange = (v: string) => {
    setValue(v);
  };

  useEffect(() => {
    setValue(value);
  });
  
  // Prefixes for displayed text beside the radio btn
  const shippingMethodText1 =
    shippingMethods[0].name +
    " - " +
    shippingMethods[0].price +
    " kr (" +
    shippingMethods[0].deliveryTime +
    ")";
  const shippingMethodText2 =
    shippingMethods[1].name +
    " - " +
    shippingMethods[1].price +
    " kr (" +
    shippingMethods[1].deliveryTime +
    ")";
  const shippingMethodText3 =
    shippingMethods[2].name +
    " - " +
    shippingMethods[2].price +
    " kr (" +
    shippingMethods[2].deliveryTime +
    ")";
  const shippingMethodText4 =
    shippingMethods[3].name +
    " - " +
    shippingMethods[3].price +
    " kr (" +
    shippingMethods[3].deliveryTime +
    ")";
  const shippingMethodText5 =
    shippingMethods[4].name +
    " - " +
    shippingMethods[4].price +
    " kr (" +
    shippingMethods[4].deliveryTime +
    ")";

  // Shipping methods array
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([]);

  return (
    <div className="container flex">
      <div className="left-side">
        <div className="breadcrumbs">{/* <BreadCrumbs /> */}</div>
        <div className="headings">
          <h2>Frakt</h2>
          <h3>Välj fraktsätt</h3>
        </div>
        <div className="checkout-form">
          <form className="flex column">
            <FormControl>
              <RadioGroup value={value} onChange={handleRadioChange}>
                <FormControlLabel
                  className="input-field"
                  value="1"
                  control={<Radio />}
                  label={shippingMethodText1}
                />
                <FormControlLabel
                  className="input-field"
                  value="2"
                  control={<Radio />}
                  label={shippingMethodText2}
                />
                <FormControlLabel
                  className="input-field"
                  value="3"
                  control={<Radio />}
                  label={shippingMethodText3}
                />
                <FormControlLabel
                  className="input-field"
                  value="4"
                  control={<Radio />}
                  label={shippingMethodText4}
                />
                <FormControlLabel
                  className="input-field"
                  value="5"
                  control={<Radio />}
                  label={shippingMethodText5}
                />
              </RadioGroup>
            </FormControl>
          </form>
          {/* <Button variant="contained" color="primary" className="move-fwd-btn">Till Betalning</Button> */}
          <button onClick={() => checkout.saveShippingMethod(value)}>
            test
          </button>
        </div>
      </div>

      <div className="right-side">
        <div className="order-overview">
          {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
          <h3>Din beställning</h3>
          <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            Dina produkter: {cart.totalPrice} SEK{" "}
          </h3>
          <div>
            {cart.cart.map((item) => {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>
                    <strong>Produkt:</strong> {item.itemName}
                  </p>
                  <p>
                    <strong>Pris:</strong> {item.price}
                  </p>{" "}
                  <p>
                    <strong>Antal:</strong> {item.quantity}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut2Shipping;
