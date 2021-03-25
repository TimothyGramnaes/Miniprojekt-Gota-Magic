import "../main.css";
import { useCart } from "../Context/CartContext";
import "../css/checkOut3Payment.css";
import {
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { useCheckoutContext } from '../Context/CheckoutContext'


function CheckOut3Payment() {
  const checkout = useCheckoutContext();
  const cart = useCart();
  const [value, setValue] = useState("");

  const userFromContext = useCheckoutContext();
  const userInfo = userFromContext.userInfo[0];

  function CardPaymentModal() {
  
    return (
      <div className="card-modal">
        <form>
          <h5>Kortinnehavarens namn</h5>
          <TextField
            fullWidth
            className="input-field"
            required
            placeholder="ex. John Doe"
            variant="standard"
          />
          <h5>Kortnummer</h5>
          <TextField
            fullWidth
            className="input-field"
            required
            placeholder="ex. 5355 0000 1111 2222"
            variant="standard"
          />
          <div className="bottom-row flex">
            <div className="expiration-date">
              <h5>Utgångsdatum</h5>
              <div className="fields flex">
                <TextField
                  className="input-field"
                  required
                  placeholder="Månad"
                  variant="standard"
                />
                <span> / </span>
                <TextField
                  className="input-field"
                  required
                  placeholder="År"
                  variant="standard"
                />
              </div>
            </div>
            <div className="cvc">
              <h5>CVC</h5>
              <TextField
                className="input-field"
                required
                placeholder="ex. 321"
                variant="standard"
              />
            </div>
          </div>
        </form>
        
      </div>
    );
  }

  function BillPaymentModal() {
    return (
      <div className="bill-modal">
        {/* Här byts exempeladressen ut mot adressen användaren matat in tidigare */}
        <p className="payment-info-text">
          Fyll i den adress dit du vill ha fakturan:
        </p>
        <TextField
          className="filled-input-field"
          required
          variant="standard"
          value={userInfo.deliveryaddress}
        />
      </div>
    );
  }

  function SMSLoanPaymentModal() {
    
    return (
      <div className="sms-loan-modal">
        <p className="payment-info-text">
          Information kring din betalning kommer skickas till:
        </p>
        <TextField
          className="filled-input-field"
          required
          variant="standard"
          value={userInfo.mobile}
        />
      </div>
    );
  }

  function SwishPaymentModal() {

    return (
      <div className="swish-modal flex column">
        <p className="payment-info-text">
          Betala smidigt och säkert med Swish - fyll i ditt mobilnummer här:
        </p>
        <TextField
          className="filled-input-field"
          required
          variant="standard"
          value={userInfo.mobile}
        />
      </div>
    );
  }
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    checkout.savePaymentMethod("Swish", 4);
  };

  return (
    <div className="container flex">
      <div className="left-side">
        <div className="breadcrumbs">{/* <BreadCrumbs /> */}</div>
        <div className="headings">
          <h2>Betalning</h2>
          <h3>Välj betalmetod och fyll i dina uppgifter</h3>
        </div>
        <div className="checkout-form">
          <form className="flex column">
            <FormControl>
              <RadioGroup value={value} onChange={handleRadioChange}>
                <FormControlLabel
                  value="kort"
                  control={<Radio />}
                  label="Kortbetalning"
                />
                <FormControlLabel
                  value="faktura"
                  control={<Radio />}
                  label="Faktura"
                />
                <FormControlLabel
                  value="betalaSenare"
                  control={<Radio />}
                  label="Köp nu - Betala senare, med SMS-lån"
                />
                <FormControlLabel
                  value="swish"
                  control={<Radio />}
                  label="Swish"
                />
              </RadioGroup>
            </FormControl>
          </form>

          {value === "betalaSenare" ? (
            <SMSLoanPaymentModal />
          ) : value === "faktura" ? (
            <BillPaymentModal />
          ) : value === "kort" ? (
            <CardPaymentModal />
          ) : value === "swish" ? (
            <SwishPaymentModal />
          ) : (
            ""
          )}
        </div>
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
                  <img src={item.img} alt={item.itemName} />
                  <div className="cartInfoText">
                    <p>
                      <strong>{item.itemName}</strong>
                    </p>
                    <p>{item.price} kr</p>{" "}
                    <p>
                      <strong>Antal:</strong> {item.quantity}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="priceInfo">
            <p>
              {" "}
              <b>Total kostnad: </b> {cart.totalPrice} kr{" "}
            </p>
            <p>
              {" "}
              <b>Varav Moms:</b> 59 kr
            </p>
            <p>
              {" "}
              <b>Frakt: </b> Ej fastställt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut3Payment;
