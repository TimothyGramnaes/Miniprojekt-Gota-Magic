import '../css/checkOut3Payment.css'
import '../main.css'
import { TextField, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import BreadCrumbs from './BreadCrumbs';
import React from 'react';

function CardPaymentModal() {
  return (
    <div className="card-modal">
      <form>
        <h5>Kortinnehavarens namn</h5>
        <TextField fullWidth className="input-field" required placeholder="ex. John Doe" variant="standard" />
        <h5>Kortnummer</h5>
        <TextField fullWidth className="input-field" required placeholder="ex. 5355 0000 1111 2222" variant="standard" />
        <div className="bottom-row flex">
          <div className="expiration-date">
            <h5>Utgångsdatum</h5>
            <div className="fields flex">
              <TextField className="input-field" required placeholder="Månad" variant="standard" />
              <span> / </span>
              <TextField className="input-field" required placeholder="År" variant="standard" />
            </div>
          </div>
          <div className="cvc">
            <h5>CVC</h5>
            <TextField className="input-field" required placeholder="ex. 321" variant="standard" />
          </div>
        </div>
      </form>
      <Button variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button>
    </div>
  )
}

function BillPaymentModal() {
  return (
    <div className="bill-modal">
      {/* Här byts exempeltexten ut mot informationen användaren matat in tidigare, som sparats i local storage */}
      <p>Din faktura kommer skickas till Exempelgatan 33</p>
      <Button variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button>
    </div>
  )
}

function SMSLoanPaymentModal() {
  return (
    <div className="sms-loan-modal">
      {/* Här byts exempeltexten ut mot informationen användaren matat in tidigare, som sparats i local storage */}
      <p>Information kring din betalning kommer skickas till 0701 23 45 67</p>
      <Button variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button>
    </div>
  )
}

function CheckOut3Payment() {

  const [value, setValue] = React.useState('')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('value after submit is: ' + value)

    return (
      value === 'card' ? 
      <CardPaymentModal />

      : value === 'faktura' ? 
      <BillPaymentModal />

      :
      <SMSLoanPaymentModal />
    )
  }

  return (
    <div className="background">
      <div className="grey-card">
        <div className="container flex">

          <div className="left-side">
            <div className="breadcrumbs">
              <BreadCrumbs />
            </div>
            <div className="headings">
              <h2>Betalning</h2>
              <h3>Välj betalmetod och fyll i dina uppgifter</h3>
            </div>
            <div className="checkout-form">
              <form className="flex column" onSubmit={handleSubmit}>
                <FormControl>
                  <RadioGroup value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="kort" control={<Radio />} label="Kortbetalning" />
                    <FormControlLabel value="faktura" control={<Radio />} label="Faktura" />
                    <FormControlLabel value="betalaSenare" control={<Radio />} label="Köp nu - Betala senare, med SMS-lån" />
                  </RadioGroup>
                  <Button type="submit" variant="contained" color="primary" className="choose-payment-btn">Välj Betalmetod</Button>
                </FormControl>
              </form>
              {/* Payment modal */}


              


            </div>
          </div>

          <div className="right-side">
            <div className="order-overview">
              {/* Här tar vi in order komponenten, och tar bort den temporära nedanför */}
              <h3>Din beställning</h3>
              <h4>Produktnamn</h4>
              <span>199 kr</span>
              <h4>Produktnamn</h4>
              <span>199 kr</span>
              <h4>Produktnamn</h4>
              <span>199 kr</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default CheckOut3Payment
