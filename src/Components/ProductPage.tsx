import { products } from '../DB/Products'
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import '../main.css'
import '../css/productPage.css'
import { useProductContext } from '../Context/ProductContext'
import { useState } from 'react'

function ProductPage() {

  const product = useProductContext()

  const [productView, setProductView] = useState(product.getProductView[0])

  console.log(productView.productname)

  return (

    <div className="background">
      <div className="grey-card">
        <div className="container">

          <div className="top flex">

            <div className="image-container flex">
              {/* Ta in product.image, byt diven nedan till en <img/> */}
              <img src={productView.image} alt=""/>
            </div>

            <div className="info-content flex column"> 
              {/* Ta in product.name */}
              <h2>{productView.productname}</h2>
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
              <h2 className="price-text">{productView.price}</h2>
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
              <p>{productView.cardtext}</p>
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
