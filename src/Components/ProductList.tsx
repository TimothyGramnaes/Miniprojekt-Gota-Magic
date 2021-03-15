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
    const [productViewArray, setProductViewArray] = useState(products)
    const [searchValue, setSearchValue] = useState<string>()

    // Number of items in productlist
    const pageNumbers:number = 6

    // Styling variables
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
        maxWidth: '80vw',
        width: '75rem',
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

    const searchStyle: CSSProperties = {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        paddingBottom: '2rem'
    }
    // End styling variables

    // The mapping of the product database
    const productData=productViewArray.slice(page, pageItems).map(product => (
        <div key={product.id}>
            <ProductListCard productname={product.productname} price={product.price} image={product.image}/>
        </div>
        )
    )

    // Filtering the product database with the searchvalue
    // The searchvalue is broken down with length to slice the product database value to the lenght of the searchvalue
    // Both value is formated to lowercase for easier compare
    const filterdArray = products.filter((result) => {
        
        const searchlength = searchValue?.length
        const productColor = result.color
        const sliceProductColor = productColor.slice(0, searchlength)
        const productName = result.productname
        const sliceProductName = productName.slice(0, searchlength)
        const productExpansion = result.expansion
        const sliceProductExpansion = productExpansion.slice(0, searchlength)

        if (searchValue?.toLowerCase() == sliceProductColor.toLowerCase()) {
            return searchValue?.toLowerCase()
        } else if (searchValue?.toLowerCase() == sliceProductName.toLowerCase()) {
            return searchValue?.toLowerCase()
        } else if (searchValue?.toLowerCase() == sliceProductExpansion.toLowerCase()) {
            return searchValue?.toLowerCase()
        }

        // return searchValue?.toLowerCase() == sliceProduct.toLowerCase()
    })

    // Reset the pagination values and set the setProductViewArray with the full product database values
    // And then sets the setProductViewArray to the filtered result
    const searchArray = () => {
        setPage(0)
        setPageItems(6)
        setPageNumber(1)
        setProductViewArray(products)
        setProductViewArray(filterdArray)
    }

    // sets the input value to searchValue
    const handleChange = (e:any) => {
        setSearchValue(e.target.value)
    }

    // When pressed it runs the seachArray function to show the search result
    const handleSubmit = (evt:any) => {
        // correctAnswer(props.value)
        searchArray()
        evt.preventDefault();
    }

    // Reset the searchvalue and sets the input to blank
    const resetSearch = () => {
        setPage(0)
        setPageItems(6)
        setPageNumber(1)
        setProductViewArray(products)
        setSearchValue("")
    }

    // Goes back in the pagination
    const decrease = () => {
        const productListStart:number = productViewArray.length-productViewArray.length       

        const thisPage:number = page - pageNumbers
        const thisPageItems:number = pageItems - pageNumbers
        const thisPageNumber:number = pageNumber - 1

        if(productListStart >= page) {
            return
        } else {
        setPage(thisPage)
        setPageItems(thisPageItems)
        setPageNumber(thisPageNumber)
        }
    }

    // Goes forward in pagination
    const increase = () => {
        const productListEnd = productViewArray.length

        const thisPage:number = page + pageNumbers
        const thisPageItems:number = pageItems + pageNumbers
        const thisPageNumber:number = pageNumber + 1

        if(productListEnd <= pageItems) {
            return
        } else {
            setPage(thisPage)
            setPageItems(thisPageItems)
            setPageNumber(thisPageNumber)
        }
    }

    return(
        <div className="productListContainer" style={productListContainer}>
                <div className="searchContainer" style={searchStyle}>       
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={searchValue} onChange={handleChange}/>
                        <input type="submit" value='Sök'/>
                    </form>
                    <button onClick={resetSearch}>Reset</button>
                </div>
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