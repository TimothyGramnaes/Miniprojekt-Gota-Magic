import { CSSProperties } from '@material-ui/styles'
import ProductListCard from './ProductListCard'
import { useState, useEffect } from 'react'
import { IconButton, Grid, TextField, Button, makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useProducts } from '../Context/ProductContext'
// Used fot routing the ID to URL and the right product is showned
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    searchfield: {
        background: '#EDEDED'    
    },
    resetBtn: {
        margin: '2rem 0',
        marginLeft: '1rem'
    }
});



function ProductList() {
    const products = useProducts()

    const style = useStyles();

    // Number of items in productlist
    const [pageNumbers, setPageNumbers] = useState(12)

    const [page, setPage] = useState(0)
    const [pageItems, setPageItems] = useState(pageNumbers)
    const [pageNumber, setPageNumber] = useState(1)
    const [productViewArray, setProductViewArray] = useState(products)
    const [searchValue, setSearchValue] = useState<string>()

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
    }

    const formStyle: CSSProperties = {
        width: '100%',
        margin: '2rem 0'
    }

    // End styling variables

    // The mapping of the product database
    const productData=productViewArray.slice(page, pageItems).map(product => (
        <div key={product.id}>
            {/* Link is to show the right product on ProductPage.
                The product.id is set in the URL string, and shows the right product that has the ID. */}
                        
                <ProductListCard productname={product.productname} price={product.price} image={product.image} id={product.id}/>            
            
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
    })


    // Reset the pagination values and set the setProductViewArray with the full product database values
    // And then sets the setProductViewArray to the filtered result
    const searchArray = () => {
        setPage(0)
        setPageItems(pageNumbers)
        setPageNumber(1)
        setProductViewArray(products)
        setProductViewArray(filterdArray)
    }

    // sets the input value to searchValue
    const handleChange = (e:any) => {
        setSearchValue(e.target.value)
        searchArray()
    }

    // When pressed it runs the seachArray function to show the search result
    const handleSubmit = (evt:any) => {
        // correctAnswer(props.value)
        resetSearch()
        evt.preventDefault();
    }

    // Reset the searchvalue and sets the input to blank
    const resetSearch = () => {
        setPage(0)
        setPageItems(pageNumbers)
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
        <Grid container justify="center" alignItems="center" className="productListContainer" style={productListContainer}>
            <Grid item xs={12} className="searchContainer" style={searchStyle}>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <TextField id="filled-basic" fullWidth label="Sök här" variant="filled"  className={style.searchfield} value={searchValue} onChange={handleChange} />
                </form>
                <Button onClick={resetSearch} className={style.resetBtn} variant="contained" color="primary">Reset</Button>
            </Grid>
            <Grid item xs={12} md={8} style={listStyle}>

                {productData}

                <Grid item xs={12} className="productListBtn" style={productListBtnStyle}>
                    <IconButton onClick={decrease}>
                        <ArrowBackIcon />
                    </IconButton>
                    <div className="pageCircle" style={pagesIconStyle}>
                        <p >Sida {pageNumber}</p>
                    </div>
                    <IconButton onClick={increase}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ProductList