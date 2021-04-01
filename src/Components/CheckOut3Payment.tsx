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
import React, { useEffect, useState } from "react";
import { useCheckoutContext } from "../Context/CheckoutContext";

function CheckOut3Payment() {
  const checkout = useCheckoutContext();
  const cart = useCart();
  const [value, setValue] = useState<string>("");
  const userFromContext = useCheckoutContext();
  const userInfo = userFromContext.userInfo[0];
  const totalPay = checkout.shippingObject[0].price + cart.cartTotalPrice;
  // const [handlecardValidation, setHandleCardValidation] = useState<boolean>(
  //   false
  //);

  
  function CardPaymentModal() {    
    
    const [formValid, setFormValid] = useState(false);
    const [cardFormInput, setCardFormInput] = useState({
      cardName: "",
      cardNumber: "",
      expireDate: "",
      lastDate: "",
      cvc: "",
    });
    const [cardValidation, setCardValidation] = useState({
      nameValid: false,
      numberValid: false,
      dateValid: false,
      lastDateValid: false,
      cvcValid: false,
    });

    const isFormValid = () => {
      if (
        cardValidation.cvcValid &&
        cardValidation.dateValid &&
        cardValidation.lastDateValid &&
        cardValidation.nameValid &&
        cardValidation.numberValid
      ) {
        setFormValid(true);
      } else {
        return
      }
    };

    useEffect(() => {
      isFormValid()
      checkout.getValidationCardPayment(formValid)
    })

    // hantera kortnamn ////
    const handleCardNameInput = (event: any) => {
      // let newName = event.target.value;
      setCardFormInput({ ...cardFormInput, cardName: event.target.value });
            
      /// validera namn input ////
      if (event.target.value.length >= 1) {
        setCardValidation({ ...cardValidation, nameValid: true });
      } else {
        setCardValidation({ ...cardValidation, nameValid: false });
      }
    };

    /// Hanterar kortnummer input ///
    const handleCardNumberInput = (event: any) => {
      // let newNumber = event.target.value;
      setCardFormInput({ ...cardFormInput, cardNumber: event.target.value });

      //// vaidering av kortnummer ///
      if (/^(\d{16})$/.test(event.target.value)) {
        setCardValidation({ ...cardValidation, numberValid: true });
      } else {
        setCardValidation({ ...cardValidation, numberValid: false });
      }
    };

    /// Hanterar expiredate input ////
    const handleCardExpireInput = (event: any) => {
      // let newExpireDate = event.target.value;
      setCardFormInput({ ...cardFormInput, expireDate: event.target.value });

      /// validering av expiredate ////
      if (/^(\d{2})$/.test(event.target.value)) {
        setCardValidation({ ...cardValidation, dateValid: true });
      } else {
        setCardValidation({ ...cardValidation, dateValid: false });
      }
    };

    /// Hanterar utgångsdatum input /////
    const handleCardExpireLastDateInput = (event: any) => {
      // let newExpireLastDate = event.target.value;
      setCardFormInput({ ...cardFormInput, lastDate: event.target.value });

      /// validering utgångsdatum ///
      if (/^(\d{2})$/.test(event.target.value)) {
        setCardValidation({ ...cardValidation, lastDateValid: true });
      } else {
        setCardValidation({ ...cardValidation, lastDateValid: false });
      }
    };

    /// Hanterar cvc input////
    const handleCvcInput = (event: any) => {
      // let newCvc = event.target.value;
      setCardFormInput({ ...cardFormInput, cvc: event.target.value });

      /// validerar cvc input ////
      if (/^(\d{3})$/.test(event.target.value)) {
        setCardValidation({ ...cardValidation, cvcValid: true });
      } else {
        setCardValidation({ ...cardValidation, cvcValid: false });
      }
    };
    return (
      
      <div className="card-modal">
        
        <form>
          <h5>Kortinnehavarens namn</h5>
          <TextField
            fullWidth
            defaultValue="Normal"
            className="input-field"
            placeholder="ex. John Doe"
            variant="standard"
            value={cardFormInput.cardName}
            onChange={handleCardNameInput}
            helperText={!cardValidation.nameValid ? "Fyll i ditt namn" : null}
          />
          <h5>Kortnummer</h5>
          <TextField
            fullWidth
            className="input-field"
            required
            placeholder="ex. 5355000011112222"
            variant="standard"
            value={cardFormInput.cardNumber}
            onChange={handleCardNumberInput}
            helperText={!cardValidation.numberValid ? "Minst 16 siffror" : null}
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
                  value={cardFormInput.expireDate}
                  onChange={handleCardExpireInput}
                  helperText={
                    !cardValidation.dateValid ? "Minst 2 siffror" : null
                  }
                />
                <span> / </span>
                <TextField
                  className="input-field"
                  required
                  placeholder="År"
                  variant="standard"
                  value={cardFormInput.lastDate}
                  onChange={handleCardExpireLastDateInput}
                  helperText={
                    !cardValidation.lastDateValid ? "Minst 2 siffror" : null
                  }
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
                onChange={handleCvcInput}
                helperText={
                  !cardValidation.cvcValid
                    ? "Skriv ditt 3 siffriga cvc nummer"
                    : null
                }
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
          Fakturan kommer skickas till din email:
        </p>
        <TextField
          className="filled-input-field"
          required
          variant="standard"
          value={userInfo.email}
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
          Betala smidigt och säkert med Swish - med ditt angivna mobilnummer:
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
    const value = event.target.value;
    setValue(value);    
    checkout.savePaymentMethod(value)
    checkout.getValidationPayment(true)
    checkout.getValidationCardPayment(true)  
  };

  return (
    <div className="container flex">
      <div className="left-side">
        <div className="headings">
          <h2>Betalning</h2>
          <h3>Välj betalmetod och fyll i dina uppgifter</h3>
        </div>
        <div className="checkout-form">
          <form className="flex column">
            <FormControl>
              <RadioGroup value={value} onChange={handleRadioChange}>
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Kortbetalning"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Faktura"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Köp nu - Betala senare, med SMS-lån"
                />
                <FormControlLabel value="4" control={<Radio />} label="Swish" />
              </RadioGroup>
            </FormControl>
          </form>

          {value === "3" ? (
            <SMSLoanPaymentModal />
          ) : value === "2" ? (
            <BillPaymentModal />
          ) : value === "1" ? (
            <CardPaymentModal />
          ) : value === "4" ? (
            <SwishPaymentModal />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="right-side">
        <div className="order-overview">
          <h2>Din beställning</h2>
          <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            {cart.cartTotalPrice} kr{" "}
          </h3>
          <div className="products">
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
              <b>Total kostnad: </b> {totalPay} kr{" "}
            </p>
            <p>
              {" "}
              <b>Varav Moms:</b> {cart.cartTotalPrice * 0.25} kr
            </p>
            <p>
              {" "}
              <b>Frakt: </b> {checkout.shippingObject[0].price} kr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut3Payment;
