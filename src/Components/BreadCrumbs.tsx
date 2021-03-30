import React from "react";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import Button from "@material-ui/core/Button";
import "../main.css";
import "../css/breadcrumbs.css";

import { Link } from "react-router-dom";

import CheckOut1UserInfo from "./CheckOut1UserInfo";
import CheckOut2Shipping from "./CheckOut2Shipping";
import CheckOut3Payment from "./CheckOut3Payment";
import OrderConfirmation from "./OrderConfirmation";
import { CSSProperties } from "@material-ui/styles";
import { useCheckoutContext } from "../Context/CheckoutContext";
import { useCart } from "../Context/CartContext";

function getSteps() {
  return ["Användaruppgifter", "Frakt", "Betalning", "Orderbekräftelse"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <CheckOut1UserInfo />;
    case 1:
      return <CheckOut2Shipping />;
    case 2:
      return <CheckOut3Payment />;
    case 3:
      return <OrderConfirmation />;
    default:
      return "Unknown stepIndex";
  }
}

function BreadCrumbs() {
  const cart = useCart();
  const user = useCheckoutContext();
  const validatedUser = user.validatedUser;
  let isButtonClicked = false;

  console.log(validatedUser);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 0) {
      console.log(1);
    } else if (activeStep === 1) {
      console.log(2);
    } else if (activeStep === 2) {
      console.log(3);
      user.addOrderNumber();
      cart.ResetCart();
    } else if (activeStep === 3) {
      console.log(4);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const paymentDelay = () => {
    setTimeout(() => {
      handleNext()
    }, 3500);
  }

  // const disableButton = () => {
  //   if (isButtonClicked === true) {
  //     return true
  //   } else if (validatedUser === false) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  return (
    <div className="background">
      <div className="grey-card main-box" style={mainBox}>
        <div className="crumbs-container">
          <Stepper
            style={stepperStyle}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="bread-btn">
            {activeStep === steps.length ? (
              <div>
                <div className="slutfort-kop" style={textStyle}>
                  <p>Tack för din beställning, mycket nöje!</p>
                </div>
                <div style={{display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            paddingTop: '2rem'}}>
                <Link className="link-style" to="/ProductList">
                  <Button
                    onClick={cart.resetCartLs}
                    variant="contained"
                    color="primary"
                  >
                    Fortsätt Handla
                  </Button>
                </Link>
                </div>
              </div>
            ) : (
              <div>
                <p>{getStepContent(activeStep)}</p>

                <div className="bread-btn">
                  <Button disabled={activeStep === 0 || activeStep === 3} onClick={handleBack}>
                    Tillbaka
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={validatedUser === false}
                    onClick={activeStep === 2 ? paymentDelay : handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Klar" : "Nästa"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mainBox: CSSProperties = {
    marginTop: '6rem',
    minHeight: '67vh'
}

const stepperStyle: CSSProperties = {
  backgroundColor: "#ededed",
  padding: '0 0 1.5rem 0'
};

const textStyle: CSSProperties = {
  textAlign: 'center'
}

export default BreadCrumbs;
