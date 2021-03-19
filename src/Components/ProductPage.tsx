import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import '../main.css'
import '../css/productPage.css'
import { useProductContext } from '../Context/ProductContext'
import { useState, useEffect } from 'react'
// This is to get the URL from browser
import { RouteComponentProps } from 'react-router-dom';
// Imported the product DB just for the interface
import { Product } from '../DB/Products'

interface Props extends RouteComponentProps {
  id: string
}

  // THE HOW TO SHOW RIGHT PRODUCT
  // 1. Create in Layout <Route path="/ProductPage/:id" component={ProductPage} />
  //    The :id is set to catch the id from ProductList
  // 2. In ProductList create a Link around the mapped content <Link to={`/ProductPage/${product.id}`}>
  //    The ${product.id} sets the clicked products id in the URL
  // 3. And last, in Productpage you import "import { RouteComponentProps } from 'react-router-dom'"
  //    After that you extract the URL with this line "const productUrl = props.match.url.substr(1);"
  //    Now you've got the URL behind "pagename/" and needed to shortened
  //    Filter the product array with the id you've got and use the data in the HTML

function ProductPage(props:Props){
  
  // Import context
  const product = useProductContext()
  // Extracted the products array from Context
  const productData = product.products

  // Gets the URL in webbrowser
  const productUrl = props.match.url.substr(1);
  // Clean the URL so just the ID is left
  const getId = parseInt(productUrl.slice(12))
  
  // Default product to stop error when a product is choosen to display
  const defaultProduct:Product[] = [{productname: "Ancestor's Chosen",
  cardtype:"Creature — Human Cleric",
  color:"White",
  cardtext:"First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
  expansion:"Tenth Edition",
  cmc:7.0,
  image:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
  id:1,
  price:79,
  producttype:"single",
  view:true,
  rating: 4,
  }]

  // State that gets the filtered product
  const [viewProduct, setViewProduct] = useState<Product[]>(defaultProduct)

  // Variable to use for output data in the HTML
  const setProduct = viewProduct[0]

  // Filter the product array and return the clicked product
  const filterdProduct = productData.filter((p) => {
    if(p.id == getId) {      
      return getId
    }
  })

  // Function that sets the filtered state
  const setFilterdList = () => {
    setViewProduct(filterdProduct)
  }    

  // useEffect to automaticly runs and set the filtered value to the state
  useEffect(() => {
    setFilterdList()
  }, [])

  return (

    <div className="background">
      <div className="grey-card">
        <div className="container">

          <div className="top flex">

            <div className="image-container flex">
              {/* Ta in product.image, byt diven nedan till en <img/> */}
              <img src={setProduct.image} alt=""/>
            </div>

            <div className="info-content flex column"> 
              {/* Ta in product.name */}
              <h2>{setProduct.productname}</h2>
              {/* Ta in product.stars, rendera ut antalet stjärnor */}
              <div className="stars">
                
                <StarIcon style={{ color: yellow[700] }}/>
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
              </div>
              {/* Ta in product.shortDesc */}
              <h4>{setProduct.cardtype}</h4>
              <p>Färg:  {setProduct.color}</p>
              <p>CMC:  {setProduct.cmc}</p>
              <p>Expansion:  {setProduct.expansion}</p>
              {/* Ta in product.price */}
              <h2 className="price-text">15</h2>
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
              <p>{setProduct.cardtext}</p>
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
