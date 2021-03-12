import { CSSProperties } from '@material-ui/styles'
import { products } from '../DB/Products'
import ProductListCard from './ProductListCard'
import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ProductList() {
    const [page, setPage] = useState(0)
    const [pageItems, setPageItems] = useState(6)
    const [pageNumber, setPageNumber] = useState(1)

    // Number of items in productlist
    const pageNumbers:number = 6

    const productListContainer: CSSProperties ={
        backgroundImage: 'url(./assets/imgs/what-the-hex.png)',
    }

    const listStyle: CSSProperties = {    
        backgroundColor: '#EDEDED',  
        borderRadius: '10px',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '70rem',
        width: '100%',
        margin: '0 auto'
    }

    const productListBtnStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    const pagesIconStyle: CSSProperties = {
        width: '5rem',
        height: '5rem',
        borderRadius: '500rem',
        backgroundColor: '#393939',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem 1rem'
        
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
        <div className="productListContainer" style={productListContainer}>
            <div style={listStyle}>            
                {productData}
                
                <div className="productListBtn" style={productListBtnStyle}>
                    <IconButton onClick={decrease}>
                        <ArrowBackIcon />
                    </IconButton>
                    <div className="pageCircle" style={pagesIconStyle}>
                        <p >Sida {pageNumber}</p>
                    </div>
                    <IconButton onClick={increase}>
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ProductList