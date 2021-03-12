import { CSSProperties } from '@material-ui/styles'
import { products } from '../DB/Products'
import ProductListCard from './ProductListCard'
import { useState } from 'react'
import { Button } from '@material-ui/core'

function ProductList() {
    const [page, setPage] = useState(0)
    const [pageItems, setPageItems] = useState(6)
    const [pageNumber, setPageNumber] = useState(1)

    // Number of items in productlist
    const pageNumbers:number = 6

    const listStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '48rem',
        width: '100%',
        margin: '0 auto'
    }

    const productData=products.slice(page, pageItems).map(product => (
        <div key={product.id}>
            <ProductListCard productname={product.productname} price={product.price} image={product.image}/>
        </div>
        )
    )

    const paginationData=products.slice(page, pageItems).map(item => (
        <p>Kortnummer: {item.id}/ </p>
    ))

    const decrease = () => {
        const productListStart:number = products.length-products.length       

        const thisPage:number = page - pageNumbers
        const thisPageItems:number = pageItems - pageNumbers
        const thisPageNumber:number = pageNumber - 1

        if(productListStart == page) {
            return
        }

        console.log(productListStart)
        console.log(page)

        setPage(thisPage)
        setPageItems(thisPageItems)
        setPageNumber(thisPageNumber)
    }

    const increase = () => {
        const productListEnd = products.length

        const thisPage:number = page + pageNumbers
        const thisPageItems:number = pageItems + pageNumbers
        const thisPageNumber:number = pageNumber + 1

        console.log(productListEnd)
        console.log(pageItems+pageNumbers)

        if(productListEnd == pageItems) {
            return
        } else {
            setPage(thisPage)
            setPageItems(thisPageItems)
            setPageNumber(thisPageNumber)
        }
    }

    return(
        <div style={listStyle}>            
            {productData}
            
            <div className="productListBtn" style={{padding:'2rem 2rem'}}>
                <Button onClick={decrease}>
                    T
                </Button>
                <p>{pageNumber}</p>
                <Button onClick={increase}>
                    F
                </Button>
            </div>
        </div>
    )
}

export default ProductList