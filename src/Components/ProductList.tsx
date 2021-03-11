import { products } from '../DB/Products'

interface Props {

}

function ProductList(props:Props) {

    const productData=products.map(product => {
        <p>Namn: {product.productname}</p>
        }
    )
    console.log(productData)
    return(
        <div>
           <p>hej</p>
        </div>
    )
}

export default ProductList