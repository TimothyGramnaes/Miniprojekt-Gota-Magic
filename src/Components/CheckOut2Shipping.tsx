import TextField from '@material-ui/core/TextField';
import '../css/checkOut2Shipping.css'
import '../main.css'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import BreadCrumbs from "./BreadCrumbs";
import React, { useState } from 'react';
import { ShippingMethod, shippingMethods } from '../DB/ShippingMethods';

function CheckOut2Shipping() {

  const [value, setValue] = useState('')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log('handleRadioChange says: ' + value)
  }

  value === 'postnord' ? console.log(value) :
  value === 'earlybird' ? console.log(value) :
  value === 'instabox' ? console.log(value) :
  value === 'brevduva' ? console.log(value) :
  console.log('current value is ' + value)

  // Shipping methods array
  const [shippingObject, setShippingObject] = useState<ShippingMethod[]>([])
  
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
                <FormControl>
                  <RadioGroup onChange={handleRadioChange}>
                    <FormControlLabel id="1" className="input-field" value="postnord" control={<Radio />} label={shippingMethods[0].name} />
                    <FormControlLabel id="2" className="input-field" value="earlybird" control={<Radio />} label="EarlyBird - 29 kr (1-3 arbetsdagar)" />
                    <FormControlLabel id="3" className="input-field" value="instabox" control={<Radio />} label="Instabox - 19 kr (1-3 arbetsdagar)" />
                    <FormControlLabel id="4" className="input-field" value="brevduva" control={<Radio />} label="Brevduva  - Gratis (1 arbetsdag)" />
                    <FormControlLabel id="5" className="input-field" value="magicshipping" control={<Radio />} label="Magic Shipping - 199 kr (1 timme)" />
                  </RadioGroup>
                </FormControl>
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
