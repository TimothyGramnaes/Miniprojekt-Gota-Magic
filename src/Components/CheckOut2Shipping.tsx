import TextField from "@material-ui/core/TextField";
import "../css/checkOut2Shipping.css";
import "../main.css";
//import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
// import BreadCrumbs from "./BreadCrumbs";
// import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
// import BreadCrumbs from "./BreadCrumbs";
import React, { useEffect, useState } from "react";
import { ShippingMethod, shippingMethods } from "../DB/ShippingMethods";
import CartComponent from "./cartComponent/Cart";
import { useCart } from "../Context/CartContext";

function CheckOut2Shipping() {
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
  console.log(value);

  // useEffect(() => {
  //   setShippingMethodToState()
  // })

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

  const setShippingMethodToState = () => {
    const freightValue = value;

    if (freightValue == "postnord") {
      setName(shippingMethods[0].name);
      setPrice(shippingMethods[0].price);
      setDeliveryTime(shippingMethods[0].deliveryTime);
      console.log(
        "1 Shipping method is set to: " + name,
        price,
        deliveryTime + " and value is: " + value
      );
    } else if (value === "earlybird") {
      setName(shippingMethods[1].name);
      setPrice(shippingMethods[1].price);
      setDeliveryTime(shippingMethods[1].deliveryTime);
      console.log(
        "2 Shipping method is set to: " + name,
        price,
        deliveryTime + " and value is: " + value
      );
    } else if (value === "instabox") {
      setName(shippingMethods[2].name);
      setPrice(shippingMethods[2].price);
      setDeliveryTime(shippingMethods[2].deliveryTime);
      console.log(
        "3 Shipping method is set to: " + name,
        price,
        deliveryTime + " and value is: " + value
      );
    } else if (value === "brevduva") {
      setName(shippingMethods[3].name);
      setPrice(shippingMethods[3].price);
      setDeliveryTime(shippingMethods[3].deliveryTime);
      console.log(
        "4 Shipping method is set to: " + name,
        price,
        deliveryTime + " and value is: " + value
      );
    } else {
      setName(shippingMethods[4].name);
      setPrice(shippingMethods[4].price);
      setDeliveryTime(shippingMethods[4].deliveryTime);
      console.log(
        "5 Shipping method is set to: " + name,
        price,
        deliveryTime + " and value is: " + value
      );
    }
  };

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
                  value="postnord"
                  control={<Radio />}
                  label={shippingMethodText1}
                />
                <FormControlLabel
                  className="input-field"
                  value="earlybird"
                  control={<Radio />}
                  label={shippingMethodText2}
                />
                <FormControlLabel
                  className="input-field"
                  value="instabox"
                  control={<Radio />}
                  label={shippingMethodText3}
                />
                <FormControlLabel
                  className="input-field"
                  value="brevduva"
                  control={<Radio />}
                  label={shippingMethodText4}
                />
                <FormControlLabel
                  className="input-field"
                  value="magicshipping"
                  control={<Radio />}
                  label={shippingMethodText5}
                />
              </RadioGroup>
            </FormControl>
          </form>
          {/* <Button variant="contained" color="primary" className="move-fwd-btn">Till Betalning</Button> */}
        </div>
      </div>

      <div className="right-side">
        <div className="order-overview">
          {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
          <h3>Din beställning</h3>
          <div>
            {cart.cart.map((item) => {
              return <CartComponent item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut2Shipping;
