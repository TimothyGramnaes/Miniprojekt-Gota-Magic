import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import "../main.css";
import "../css/productPage.css";
// import { useProductContext } from '../Context/ProductContext'
// This is to get the URL from browser
import { useParams } from "react-router-dom";
import { Product, products as mockedProducts } from "../DB/Products";
import { useCart } from "../Context/CartContext";

// THE HOW TO SHOW RIGHT PRODUCT
// 1. Create in Layout <Route path="/ProductPage/:id" component={ProductPage} />
//    The :id is set to catch the id from ProductList
// 2. In ProductList create a Link around the mapped content <Link to={`/ProductPage/${product.id}`}>
//    The ${product.id} sets the clicked products id in the URL
// 3. And last, in Productpage you import "import { RouteComponentProps } from 'react-router-dom'"
//    After that you extract the URL with this line "const productUrl = props.match.url.substr(1);"
//    Now you've got the URL behind "pagename/" and needed to shortened
//    Filter the product array with the id you've got and use the data in the HTML

function ProductPage() {
  // Import context
  const products: Product[] = mockedProducts;
  const params = useParams<{ id: string }>();
  const cart = useCart();
  // Default product to stop error when a product is choosen to display
  const product = products.find((p) => String(p.id) === params.id);

  if (!product) {
    return <p>Det här magikortet verkar inte finnas.</p>;
  }

  return (
    <div className="background">
      <div className="grey-card">
        <div className="container">
          <div className="top flex">
            <div className="image-container flex">
              {/* Ta in product.image, byt diven nedan till en <img/> */}
              <img src={product.image} alt="" />
            </div>

            <div className="info-content flex column">
              {/* Ta in product.name */}
              <h2>{product.productname}</h2>
              {/* Ta in product.stars, rendera ut antalet stjärnor */}
              <div className="stars">
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
                <StarIcon style={{ color: yellow[700] }} />
              </div>
              {/* Ta in product.shortDesc */}
              <h4>{product.cardtype}</h4>
              <p>Färg: {product.color}</p>
              <p>CMC: {product.cmc}</p>
              <p>Expansion: {product.expansion}</p>
              {/* Ta in product.price */}
              <h2 className="price-text">{product.price} kr</h2>
              {/* Ta in höj/sänk antal */}
              <h3 className="flex item-counter">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </h3>
              {/* Knapp */}
              <Button
                onClick={() =>
                  cart.addToCart(
                    product.productname,
                    product.price,
                    product.image,
                    product.id
                  )
                }
                variant="contained"
                color="primary"
                className="add-to-cart-btn"
              >
                Lägg i varukorg
              </Button>
            </div>
          </div>

          <div className="bottom flex">
            <div className="desc flex column">
              <h3>Produktbeskrivning</h3>
              <p>{product.cardtext}</p>
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
  );
}

export default ProductPage;
