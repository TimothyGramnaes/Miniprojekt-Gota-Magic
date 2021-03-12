import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';


function getSteps() {
    return ['Användaruppgifter', 'Frakt', 'Betalning', 'Orderbekräftelse']
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        case 0:
            return 'Användaruppgifter...';
        case 1: 
            return 'Välj fraktmetod';
        case 2:
            return 'Hur vill du betala?'
        case 3:
            return 'Har du bestämt dig?'
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
        setActiveStep(0);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <p>Klart!</p>
                        <Button variant="contained" color="primary" onClick={handleReset}>Tillbaka</Button>
                    </div>
            
                ) : (
            <div>
                <p>{getStepContent(activeStep)}</p>
                
                    <div>
                        <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Klar' : 'Nästa'}
                        </Button>

                    </div>
                </div>

                
                )}
            </div>
        </div>

    );

}

export default BreadCrumbs;