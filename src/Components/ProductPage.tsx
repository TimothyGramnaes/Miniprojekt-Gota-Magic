import { products } from '../DB/Products'
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import '../main.css'
import '../css/productPage.css'

function ProductPage() {

  return (

    <div className="background">
      <div className="grey-card">
        <div className="container">

          <div className="top flex">

            <div className="image-container flex">
              {/* Ta in product.image, byt diven nedan till en <img/> */}
              <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card" alt=""/>
            </div>

            <div className="info-content flex column"> 
              {/* Ta in product.name */}
              <h2>Produktnamn</h2>
              {/* Ta in product.stars, rendera ut antalet stjärnor */}
              <div className="stars">
                <StarIcon style={{ color: yellow[700] }}/>
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
              </div>
              {/* Ta in product.shortDesc */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores optio nesciunt sit. Necessitatibus, placeat molestias?</p>
              {/* Ta in product.price */}
              <h2 className="price-text">199 kr</h2>
              {/* Ta in höj/sänk antal */}
              <h3 className="flex item-counter">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </h3>
              {/* Knapp */}
              <Button variant="contained" color="primary" className="add-to-cart-btn">Lägg i varukorg</Button>
            </div>

          </div>
          
          <div className="bottom flex">

            <div className="desc flex column">
              <h3>Produktbeskrivning</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt adipisci fugit voluptatem voluptatum dolorem autem harum quod ipsum quidem at impedit eum molestiae, consectetur porro architecto ipsa minus eos possimus repellat temporibus amet. Nobis laborum totam porro voluptatibus iure tenetur et, atque impedit soluta quia rerum expedita modi deleniti iusto.</p>
            </div>

            <div className="similar-products flex column">
              <h3>Liknande produkter</h3>
              <p>Andra kunder kollade också på:</p>
              {/* Ta in 2 random produkter */}
              {/* 2 st product.image */}
              {/* 2 st product.name */}
              {/* 2 st product.price */}
              {/* TEMPORÄRA "BILDER" NEDANFÖR */}

              <div className="images">
                <div className="similar-product similar-product-1">
                  <div className="image"></div>
                  <h5>Produktnamn</h5>
                  <p>299 kr</p>
                </div>
                <div className="similar-product similar-product-2">
                  <div className="image"></div>
                  <h5>Produktnamn</h5>
                  <p>299 kr</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    
    )
}



export default ProductPage
