import "../main.css";
import BreadCrumbs from "./BreadCrumbs";
import CartComponent from "./cartComponent/Cart";
import { useCart } from "../Context/CartContext";
import "../css/checkOut3Payment.css";
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
// import BreadCrumbs from './BreadCrumbs';
import React from "react";

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
      <Button variant="contained" color="primary" className="move-fwd-btn">
        Bekräfta order och betala
      </Button>
    </div>
  );
}

function BillPaymentModal() {
  return (
    <div className="bill-modal">
      {/* Här byts exempeladressen ut mot adressen användaren matat in tidigare */}
      <p className="payment-info-text">
        Din faktura kommer skickas till Exempelgatan 33
      </p>
      <Button variant="contained" color="primary" className="move-fwd-btn">
        Bekräfta order och betala
      </Button>
    </div>
  );
}

function SMSLoanPaymentModal() {
  return (
    <div className="sms-loan-modal">
      {/* Här byts exempelnumret ut mot telefonnumret användaren matat in tidigare */}
      <p className="payment-info-text">
        Information kring din betalning kommer skickas till 0701 23 45 67
      </p>
      <Button variant="contained" color="primary" className="move-fwd-btn">
        Bekräfta order och betala
      </Button>
    </div>
  );
}

function CheckOut3Payment() {
  const cart = useCart();
  const [value, setValue] = React.useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
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
              </RadioGroup>
            </FormControl>
          </form>

          {value === "betalaSenare" ? (
            <SMSLoanPaymentModal />
          ) : value === "faktura" ? (
            <BillPaymentModal />
          ) : value === "kort" ? (
            <CardPaymentModal />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="right-side">
        <div className="order-overview">
          {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
          <h3>Din beställning</h3>
          <h4>Produktnamn</h4>
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

export default CheckOut3Payment;
