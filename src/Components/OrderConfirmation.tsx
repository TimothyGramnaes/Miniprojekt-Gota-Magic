import '../css/orderConfirmation.css'
import '../main.css'
import { Button } from '@material-ui/core';
// import BreadCrumbs from "./BreadCrumbs";
import React from 'react';
import { shippingMethods } from '../DB/ShippingMethods';
import { useCart } from "../Context/CartContext";

function OrderConfirmation() {

  const cart = useCart();

  return (

        <div className="container flex">

          <div className="left-side">
            <div className="breadcrumbs">
              {/* <BreadCrumbs /> */}
            </div>
            <div className="headings">
              <h2>Orderbekräftelse</h2>
              <h5>Ordernummer: #1739102</h5>
              <h3>Detta är ett bevis på ditt köp. Spara denna orderbekräftelse!</h3>
            </div>
            <div className="user-info">
              <h5 className="order-info-text">Din leverans beräknas anlända till **ADRESS** om ca **FRAKTSÄTT LÄNGD**</h5>
              <h3>Användaruppgifter</h3>
              <p>John Doe</p>
              <p>johndoe@snailmail.com</p>
              <p>0701-23 45 67</p>
              <p>Exempelgatan 99, 434 34, Exempelhamn</p>
              <h3>Betalning</h3>
              <p>Kortbetalning med kort: **** **** **** 1234</p>
              <h3>Frakt</h3>
              <p>{shippingMethods[0].name}, {shippingMethods[0].deliveryTime}, {shippingMethods[0].price} kr</p>
            </div>
            {/* <Button variant="contained" color="primary" className="move-fwd-btn">Fortsätt handla</Button> */}
          </div>

          <div className="right-side">
        <div className="order-overview">
          {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
          <h2>Din beställning</h2>
          <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            {cart.totalPrice} kr{" "}
          </h3>
          <div>
            {cart.cart.map((item) => {
              return (
                <div className="cartItem">
                  <img src={item.img} alt={item.itemName}/>
                  <div className="cartInfoText">
                    <p>
                      <strong>{item.itemName}</strong>
                    </p>
                    <p>
                      {item.price} kr
                    </p>{" "}
                    <p>
                      <strong>Antal:</strong> {item.quantity}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* {cart.cart.map((item) => {
              return <CartComponent item={item} />;
            })} */}
          </div>
          <div className="priceInfo">
            <p> <b>Total kostnad: </b> {cart.totalPrice} kr{" "}</p>
            <p> <b>Varav Moms:</b> 59 kr</p>
            <p> <b>Frakt: </b> Ej fastställt</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OrderConfirmation;
