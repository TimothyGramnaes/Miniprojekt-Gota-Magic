import "../main.css";
import BreadCrumbs from "./BreadCrumbs";
import CartComponent from "./cartComponent/Cart";
import { useCart } from "../Context/CartContext";
import "../css/checkOut3Payment.css";
import { PaymentMethods, Card, Invoice, SmsLoan, Swish } from "../DB/PaymentMethods"
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
// import BreadCrumbs from './BreadCrumbs';
import React, { useState, useEffect } from "react";
import  { User } from "../Components/CheckOut1UserInfo"
import {CheckoutContext, useCheckoutContext} from '../Context/CheckoutContext'


function CheckOut3Payment() {
  const cart = useCart();
  const [value, setValue] = React.useState("");

  const userFromContext = useCheckoutContext()
  const userInfo = userFromContext.userInfo[0]

  const [userObject, setUserObject] = useState<User[]>([]);
  // const [value, setValue] = useState<string>("");
  const [cardType, setCardType] = useState<string>("Betalkort")
  const [userName, setUserName] = useState<string>(userInfo.name)
  const [cardNumber, setCardNumber] = useState<number>(0)
  const [month, setMonth] = useState<number>(1)
  const [year, setyear] = useState<number>(23)
  const [safeCode, setSafeCode] = useState<number>(111)
  const [email, setEmail] = useState<string>(userInfo.email)
  const [mobileNumber, SetMobileNumber] = useState<string>(userInfo.mobile)

  function CardPaymentModal() {
  
      // This useEffect fetch the localStorage after the page is updated.
    // If this is not running, the saved LS data will be deleted
    // useEffect(() => {
    //   const data = localStorage.getItem("user");    
    //   if (data) {
    //     setUserObject(JSON.parse(data));
    //   }
    //   setUser()
    // }, []);
  
    const setUser = () => {
      // setUserName(userObject[0].name)
      // setEmail(userObject[0].email)
      // SetMobileNumber(userObject[0].mobile)
    }

    // const setPaymentToState = () => {
    //   const PaymentValue = Number(value)
      
    //   if (PaymentValue == 1) {
    //     setUserName("Nicklas"), //från LS
    //     setCardNumber(0),
    //     setMonth(1),
    //     setyear(23),
    //     setSafeCode(111)  
    //    } else if (PaymentValue == 2) {
    //       setEmail("david@sensei.se") // från LS
    //      } else if (PaymentValue == 3) {
    //         SetMobileNumber(467012345678) //från LS
    //        } else if (PaymentValue == 4) {
    //           SetMobileNumber(467012345678) //från LS
    //         };
    // }
  
    // console.log(userName, cardNumber, month, year, safeCode, email, mobileNumber)
  
  
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
          Fyll i den adress dit du vill ha fakturan:
        </p>
        <TextField
          className="filled-input-field"
          required
          variant="standard"
          value={userInfo.deliveryaddress}
        />
        <Button variant="contained" color="primary" className="move-fwd-btn">
          Bekräfta order och betala
        </Button>
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
        <Button variant="contained" color="primary" className="move-fwd-btn">
          Bekräfta order och betala
        </Button>
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
        <Button variant="contained" color="primary" className="move-fwd-btn">
          Bekräfta order och betala
        </Button>
      </div>
    );
  }
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
          ) : value === 'swish' ? (
            <SwishPaymentModal />
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
