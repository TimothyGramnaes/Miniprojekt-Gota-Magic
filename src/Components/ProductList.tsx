import { CSSProperties } from '@material-ui/styles'
import { products } from '../DB/Products'
import ProductListCard from './ProductListCard'

function ProductList() {
    const listStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '48rem',
        width: '100%',
        margin: '0 auto'
    }

    const productData=products.map(product => (
        <div key={product.id}>
            <ProductListCard productname={product.productname} price={product.price} image={product.image}/>
        </div>
        )
    )

    return(
        <div style={listStyle}>            
            {productData}
        </div>
    )
}

export default ProductList