import { CSSProperties } from '@material-ui/styles'
import { products } from '../DB/Products'
import ProductListCard from './ProductListCard'
import { useState } from 'react'
import { Button } from '@material-ui/core'

function ProductList() {
    const [page, setPage] = useState(0)
    const [pageItems, setPageItems] = useState(5)

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

    const paginationData=products.slice(page, pageItems).map(item => (
        <p>Kortnummer: {item.id}/ </p>
    ))

    const decrease = () => {
        const thisPage:number = page - 5
        const thisPageItems:number = pageItems - 5
        setPage(thisPage)
        setPageItems(thisPageItems)
    }

    const increase = () => {
        const thisPage:number = page + 5
        const thisPageItems:number = pageItems + 5
        setPage(thisPage)
        setPageItems(thisPageItems)
    }

    return(
        <div style={listStyle}>            
            {productData}
            <h2>PAGINATION</h2>
            <div className="products">
            {paginationData}
            </div>
            <div className="productListBtn" style={{padding:'2rem 2rem'}}>
                <Button onClick={decrease}>
                    T
                </Button>
                <p>Sida 1</p>
                <Button onClick={increase}>
                    F
                </Button>
            </div>
        </div>
    )
}

export default ProductList