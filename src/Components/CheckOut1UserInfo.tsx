import TextField from '@material-ui/core/TextField';
import '../css/checkOut1UserInfo.css'
import '../main.css'
import { Button } from '@material-ui/core';
import BreadCrumbs from './BreadCrumbs';

function CheckOut1UserInfo() {
  return (
    <div className="background">
      <div className="grey-card">
        <div className="container flex">

          <div className="left-side">
            <div className="breadcrumbs">
              <BreadCrumbs />
            </div>
            <div className="headings">
              <h2>Utcheckning</h2>
              <h3>Fyll i dina användauppgifter</h3>
            </div>
            <div className="checkout-form">
              <form className="flex column">
                <h5>Ditt namn</h5>
                <TextField className="input-field" required placeholder="ex. John Doe" variant="standard" />
                <h5>E-Mail</h5>
                <TextField className="input-field" required placeholder="ex. johndoe@gmail.com" variant="standard" type="email" />
                <h5>Mobilnummer</h5>
                <TextField className="input-field" required placeholder="ex. 0701234567" variant="standard" type="tel" />
                <h5>Leveransadress</h5>
                <TextField className="input-field" required placeholder="ex. Exempelgatan 5B" variant="standard" />
                <h5>Stad / Ort</h5>
                <TextField className="input-field" required placeholder="ex. Exempelhamn" variant="standard" />
                <h5>Postnummer</h5>
                <TextField className="input-field" required placeholder="ex. 123 45" variant="standard" />
              </form>
                <Button variant="contained" color="primary" className="move-fwd-btn">Välj Fraktsätt</Button>
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

export default CheckOut1UserInfo
