import TextField from "@material-ui/core/TextField";
import "../css/checkOut1UserInfo.css";
import "../main.css";
import { Button } from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import { useCart } from "../Context/CartContext";
import CartComponent from "./cartComponent/Cart";
import "../css/checkOut1UserInfo.css";
import "../main.css";
import { useEffect, useState } from "react";

// Interface to the userObject array
interface User {
  name: string;
  email: string;
  mobile: string;
  deliveryaddress: string;
  city: string;
  postnumber: string;
}

function CheckOut1UserInfo() {
  const cart = useCart();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMobile, setUserMobile] = useState<string>("");
  const [userDeliveryaddress, setUserDeliveryaddress] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userPostNumber, setUserPostNumber] = useState<string>("");

  // The user array
  const [userObject, setUserObject] = useState<User[]>([]);

  // Functions that handles the inputfields an save it to states right above
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handleuserEmail = (e: any) => {
    setUserEmail(e.target.value);
  };
  const handleuserMobile = (e: any) => {
    setUserMobile(e.target.value);
  };
  const handleuserDeliveryaddress = (e: any) => {
    setUserDeliveryaddress(e.target.value);
  };
  const handleuserCity = (e: any) => {
    setUserCity(e.target.value);
  };
  const handleuserPostNumber = (e: any) => {
    setUserPostNumber(e.target.value);
  };
  // End of input handlers

  // Function that saves the inputsfields to an object
  const setUserToObject = () => {
    setUserObject([
      {
        name: userName,
        email: userEmail,
        mobile: userMobile,
        deliveryaddress: userDeliveryaddress,
        city: userCity,
        postnumber: userPostNumber,
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
          <Button
            onClick={setUserToObject}
            variant="contained"
            color="primary"
            className="move-fwd-btn"
          >
            Välj Fraktsätt
          </Button>
          {/* <Button onClick={setUserToObject} variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button> */}
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

export default CheckOut1UserInfo;
