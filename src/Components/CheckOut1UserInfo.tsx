import TextField from '@material-ui/core/TextField';
import '../css/checkOut1UserInfo.css'
import {CheckoutContext, useCheckoutContext} from '../Context/CheckoutContext'
import { Button } from '@material-ui/core';
import "../css/checkOut1UserInfo.css";
import "../main.css";
import BreadCrumbs from "./BreadCrumbs";
import { useCart } from "../Context/CartContext";
import CartComponent from "./cartComponent/Cart";
import "../css/checkOut1UserInfo.css";
import { useEffect, useState } from "react";
import { FormatColorResetOutlined } from '@material-ui/icons';

// Interface to the userObject array
export interface User {
  name: string;
  email: string;
  mobile: string;
  deliveryaddress: string;
  city: string;
  postnumber: string;
  validated: boolean
}

interface Validate {
  name: boolean;
  email: boolean;
  // mobile: boolean;
  // deliveryaddress: boolean;
  // city: boolean;
  // postnumber: boolean;
}

function CheckOut1UserInfo() {
  const cart = useCart();
  const [userName, setUserName] = useState<string>("");
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [userNameErrorText, setUserNameErrorText] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMobile, setUserMobile] = useState<string>("");
  const [userDeliveryaddress, setUserDeliveryaddress] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userPostNumber, setUserPostNumber] = useState<string>("");
  const [userEmailError, setUserEmailError] = useState<boolean>(false);
  const [userEmailErrorText, setUserEmailErrorText] = useState<string>('');
  const [userMobileError, setUserMobileError] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);


  // The user array
  const [userObject, setUserObject] = useState<User[]>([]);

  const user = useCheckoutContext()


  // Functions that handles the inputfields an save it to states right above
  const handleUserName = (e: any) => {
    
    setUserName(e.target.value);
    if (e.target.value.length < 5) {
      setUserNameError(false)
      setUserNameErrorText('För kort! Minst 5 tecken')
    } else {
      setUserNameError(true)
      setUserNameErrorText('')
      setUserToObject()
    }
  };
  const handleuserEmail = (e: any) => {
    setUserEmail(e.target.value);
    if (e.target.value.indexOf('@') === -1) {
      setUserEmailError(false)
      setUserEmailErrorText('Kräver en riktig e-post') 
    } 
    else {
      setUserEmailErrorText('')
      setUserEmailError(true)
      setUserToObject()
    }
  };
  const handleuserMobile = (e: any) => {
    setUserMobile(e.target.value);
    setUserToObject()
  };
  const handleuserDeliveryaddress = (e: any) => {
    setUserDeliveryaddress(e.target.value);
    setUserToObject()
  };
  const handleuserCity = (e: any) => {
    setUserCity(e.target.value);
    setUserToObject()
  };
  const handleuserPostNumber = (e: any) => {
    setUserPostNumber(e.target.value);
    setUserToObject()
  };
  // End of input handlers


  // Function that saves the inputsfields to an object
  const setUserToObject = () => {

    user.getValidation(validated)

    user.saveUserInformation(userName, userEmail, userMobile, userDeliveryaddress, userCity, userPostNumber, validated)
    setUserObject([
      {
        name: userName,
        email: userEmail,
        mobile: userMobile,
        deliveryaddress: userDeliveryaddress,
        city: userCity,
        postnumber: userPostNumber,
        validated: validated
      },
    ]);
  }; 


  // This useEffect fetch the localStorage after the page is updated.
  // If this is not running, the saved LS data will be deleted
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUserObject(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (userNameError && userEmailError === true) {
      setValidated(true)
      console.log('funkar')
    } else {
      setValidated(false)
    }
  })

  useEffect(()=> {
    user.getValidation(validated)
    
  })

  useEffect(() => {
    user.saveUserInformation(userName, userEmail, userMobile, userDeliveryaddress, userCity, userPostNumber, validated)
    setUserObject([
      {
        name: userName,
        email: userEmail,
        mobile: userMobile,
        deliveryaddress: userDeliveryaddress,
        city: userCity,
        postnumber: userPostNumber,
        validated: validated
      },
    ]);
  }, [])

  // This useEffect saves the userObject to LS
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userObject));
  });

  return (
    <div className="container flex">
      <div className="left-side">
        <div className="breadcrumbs">{/* <BreadCrumbs /> */}</div>
        <div className="headings">
          <h2>Utcheckning</h2>
          <h3>Fyll i dina användauppgifter</h3>
        </div>
        <div className="checkout-form">
          <form className="flex column" autoComplete="on">
            <h5>Ditt namn</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. John Doe"
              variant="standard"
              value={userName}
              onChange={handleUserName}
              error={userNameError}
              helperText={userNameErrorText}
            />
            <h5>E-Mail</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. johndoe@gmail.com"
              variant="standard"
              type="email"
              value={userEmail}
              onChange={handleuserEmail}
              error={userEmailError}
              helperText={userEmailErrorText}
              
            />
            <h5>Mobilnummer</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. 0701234567"
              variant="standard"
              type="tel"
              value={userMobile}
              onChange={handleuserMobile}
            />
            <h5>Leveransadress</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. Exempelgatan 5B"
              variant="standard"
              value={userDeliveryaddress}
              onChange={handleuserDeliveryaddress}
            />
            <h5>Stad / Ort</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. Exempelhamn"
              variant="standard"
              value={userCity}
              onChange={handleuserCity}
            />
            <h5>Postnummer</h5>
            <TextField
              className="input-field"
              required
              placeholder="ex. 123 45"
              variant="standard"
              value={userPostNumber}
              onChange={handleuserPostNumber}
            />
          </form>
          {/* <Button
            onClick={setUserToObject}
            variant="contained"
            color="primary"
            className="move-fwd-btn"
          >
            Välj Fraktsätt
          </Button> */}
          {/* <button onClick={user.addOrderNumber}>Plussa ordernummer</button> */}
          {/* <Button onClick={setUserToObject} variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button> */}
        </div>
      </div>

      <div className="right-side">
        <div className="order-overview">
          {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
          <h2>Din beställning</h2>
          <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            {cart.totalPrice} kr{" "}
          </h3>
          <div className="products">
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
  );
}

export default CheckOut1UserInfo;
// function email(name: void, string: any, email: any, string: any, mobile: any, string: any, deliveryaddress: any, string: any, city: any, string: any, postnumber: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function mobile(name: void, string: any, email: any, string: any, mobile: any, string: any, deliveryaddress: any, string: any, city: any, string: any, postnumber: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function deliveryaddress(name: void, string: any, email: any, string: any, mobile: any, string: any, deliveryaddress: any, string: any, city: any, string: any, postnumber: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function city(name: void, string: any, email: any, string: any, mobile: any, string: any, deliveryaddress: any, string: any, city: any, string: any, postnumber: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function postnumber(name: void, string: any, email: any, string: any, mobile: any, string: any, deliveryaddress: any, string: any, city: any, string: any, postnumber: any, string: any) {
//   throw new Error('Function not implemented.');
// }

