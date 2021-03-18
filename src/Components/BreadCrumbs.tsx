import React from 'react';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import Button from '@material-ui/core/Button';
import '../main.css';
import '../css/breadcrumbs.css';


import CheckOut1UserInfo from './CheckOut1UserInfo';
import CheckOut2Shipping from "./CheckOut2Shipping";
import CheckOut3Payment from "./CheckOut3Payment";
import OrderConfirmation from "./OrderConfirmation";
// import ProductList from "./ProductList"




function getSteps() {
    return ['Användaruppgifter', 'Frakt', 'Betalning', 'Orderbekräftelse']
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
            return 'Unknown stepIndex';
    }
}

function BreadCrumbs() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep +1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep -1);
    };

    const handleReset = () => {
        // setActiveStep(0);
      //  return <ProductList />
    };

    return (
    <div className="background">
        <div className="grey-card">
        
            <div className="crumbs-container">
            <Stepper className="grey-background" activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="bread-btn">
                {activeStep === steps.length ? (
                    <div>
                        <div className="slutfort-kop">
                            <p>Tack för din beställning,</p>
                            <p>mycket nöje!</p>
                        </div>
                        <Button variant="contained" 
                        color="primary" 
                        onClick={handleReset}>
                            Fortsätt Handla
                        </Button>
                    </div>
            
                ) : (
            <div>
                <p>{getStepContent(activeStep)}</p>
                
                    <div className="bread-btn">
                        <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        >
                            Tillbaka
                        </Button>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Klar' : 'Nästa'}
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

export default BreadCrumbs;