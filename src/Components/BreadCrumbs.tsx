import React, { useEffect, useState } from "react";
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
    case 4: break;
    default:
      return "Unknown stepIndex";
  }
}

function BreadCrumbs() {
  const cart = useCart();
  const user = useCheckoutContext();
  const validatedUser = user.validatedUser;
  const validatedUserShipping = user.validatedShipping;
  const validatedUserPayment = user.validatedPayment;
  const [disableAtPay, setDisableAtPay] = useState(true)


  const [active, setActive] = useState(false)
  // validatedUser === false

  const activateBtn = () => {
    if(validatedUser === false && activeStep === 0) {
      setActive(false)  
      
    } else if (validatedUser === true && activeStep === 0) {
      setActive(true)

    } else if(validatedUserShipping === false && activeStep === 1) {
      setActive(false)  
      
    } else if (validatedUserShipping === true && activeStep === 1) {
      setActive(true)
      user.getValidationPayment(false)

    } else if(validatedUserPayment === false && activeStep === 2) {
      setActive(false)  
      
      
    } else if (validatedUserPayment === true && activeStep === 2) {
      setActive(true)
      user.getValidation(false)
      user.getValidationShipping(false)

    
    } else if (activeStep === 3) {
      setActive(true)
      user.getValidationPayment(false)
    } 
    

    
}

  useEffect(() => {
    activateBtn()
  })

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 0) {
      activateBtn()
    } else if (activeStep === 1) {
      
    } else if (activeStep === 2) {
      
      user.addOrderNumber();
      cart.ResetCart();
    } else if (activeStep === 3) {
      
    } else if (activeStep >= 3) {
      return
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const paymentDelay = () => {
    if (activeStep === 2 && disableAtPay === false) {
      return
    }
    setTimeout(() => {
      handleNext()
    }, 3500);
  }

  const handleClick = () => {

    
    
    if(activeStep === 2){
      setDisableAtPay(false)
      setActive(false)
      paymentDelay()    
    } else {
      handleNext()
    }
  }

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
                    disabled={active === false}
                    onClick={handleClick}
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
