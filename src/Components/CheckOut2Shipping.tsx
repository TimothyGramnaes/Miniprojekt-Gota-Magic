import TextField from '@material-ui/core/TextField';
import '../css/checkOut2Shipping.css'
import '../main.css'
import { Button, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import BreadCrumbs from "./BreadCrumbs";
import React from 'react';

function CheckOut2Shipping() {
  return (
    <div className="background">
      <div className="grey-card">
        <div className="container flex">

          <div className="left-side">
            <div className="breadcrumbs">
              <BreadCrumbs />
            </div>
            <div className="headings">
              <h2>Frakt</h2>
              <h3>Välj fraktsätt</h3>
            </div>
            <div className="checkout-form">
              <form className="flex column">
                <RadioGroup>
                  <FormControlLabel className="input-field" value="postnord" control={<Radio />} label="Postnord - 9 kr (14-21 arbetsdagar)" />
                  <FormControlLabel className="input-field" value="earlybird" control={<Radio />} label="EarlyBird - 29 kr (1-3 arbetsdagar)" />
                  <FormControlLabel className="input-field" value="instabox" control={<Radio />} label="Instabox - 19 kr (1-3 arbetsdagar)" />
                  <FormControlLabel className="input-field" value="brevduva" control={<Radio />} label="Brevduva  - Gratis (1 arbetsdag)" />
                  <FormControlLabel className="input-field" value="magicshipping" control={<Radio />} label="Magic Shipping - 199 kr (1 timme)" />
                </RadioGroup>
              </form>
                <Button variant="contained" color="primary" className="move-fwd-btn">Till Betalning</Button>
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

export default CheckOut2Shipping
