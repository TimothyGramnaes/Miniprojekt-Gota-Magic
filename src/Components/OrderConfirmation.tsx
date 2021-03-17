import '../css/orderConfirmation.css'
import '../main.css'
import { Button } from '@material-ui/core';
import BreadCrumbs from "./BreadCrumbs";
import React from 'react';

function OrderConfirmation() {
  return (
    <div className="background">
      <div className="grey-card">
        <div className="container flex">

          <div className="left-side">
            <div className="breadcrumbs">
              <BreadCrumbs />
            </div>
            <div className="headings">
              <h2>Orderbekräftelse</h2>
              <h5>Ordernummer: #1739102</h5>
              <h3>Detta är ett bevis på ditt köp. Spara denna orderbekräftelse!</h3>
            </div>
            <div className="user-info">
              <h5 className="order-info-text">Din leverans beräknas anlända till **ADRESS** om ca **FRAKTSÄTT LÄNGD**</h5>
              <h3>Användaruppgifter</h3>
              <p>John Doe</p>
              <p>johndoe@snailmail.com</p>
              <p>0701-23 45 67</p>
              <p>Exempelgatan 99, 434 34, Exempelhamn</p>
              <h3>Betalning</h3>
              <p>Kortbetalning med kort: **** **** **** 1234</p>
              <h3>Frakt</h3>
              <p>Brevduva, 1 arbetsdag, Gratis</p>
            </div>
            <Button variant="contained" color="primary" className="move-fwd-btn">Fortsätt handla</Button>
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

export default OrderConfirmation;
