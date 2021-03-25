import { Link, BrowserRouter as Router } from 'react-router-dom'
import '../main.css'
import '../css/footer.css'
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import { useState } from 'react';

function Footer() {
  const [divider, rotateDivider] = useState(false)
  
  const dividerOrientation = () => {
    if (window.innerWidth <= 600) {
      rotateDivider(true)
    } else {
      rotateDivider(false)
    }
  }

  window.addEventListener('resize', dividerOrientation)

  return (
    <Router>
      <footer>
        <div className="flex content">

          <div className="footer-column flex column">
            <h4>Göta Magic</h4>
            <ul>
              <li>
                <Link to='/listitem1' className="li-item">
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem2' className="li-item">
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem3' className="li-item">
                  List Item
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider-container">
            {divider ? (
              <Divider orientation="horizontal" />
            ) : (
              <Divider orientation="vertical" />
            )}
          </div>

          <div className="footer-column flex column">
            <h4>Produkter</h4>
            <ul>
              <li>
                <Link to='/listitem1' className="li-item">
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem2' className="li-item">
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem3' className="li-item">
                  List Item
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column flex column">
            <h4>Kontakt</h4>
            <ul>
              <li className="flex alignItemsCenter">
                <Link to='/listitem1' className="li-item">
                  <MailIcon style={{ marginRight: '1rem' }} />
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem2' className="li-item">
                  <PhoneIcon style={{ marginRight: '1rem' }} />
                  List Item
                </Link>
              </li>
              <li>
                <Link to='/listitem3' className="li-item">
                  <HomeIcon style={{ marginRight: '1rem' }} />
                  List Item
                </Link>
              </li>
            </ul>
          </div>

        </div>
          
          <div className="copyright-section">
            <p>Copyright © | Göta Magic. All rights reserved.</p>
          </div>

      </footer>
    </Router>
  )
}

export default Footer
