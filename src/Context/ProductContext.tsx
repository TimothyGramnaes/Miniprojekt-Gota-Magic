import React, { useState, createContext } from 'react'
import { products } from '../DB/Products'

export const ProductContext = createContext();

interface Props {
    products:[]
}

export const ProductProvider = (props:Props) => {

    const [productList, setProductList] = useState(products)
    // console.log(productList)

    return (
        <ProductContext.Provider>
            {props.children}
        </ProductContext.Provider>
    )
    // <ProductContext.Provider>{props.children}</ProductContext.Provider>
    
};



