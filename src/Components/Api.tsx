import React, { useState, useEffect } from 'react'

import { Product, products as mockedProducts } from '../DB/Products'
import Layout from './Layout'

import { useProductContext } from "../Context/ProductContext";

function Api() {

    const productContext = useProductContext()

    const [products, setProducts] = useState<Product[]>(mockedProducts)
   
    useEffect(() => {
        productContext.ProductArray(products);
      }, [productContext, products]);
      
    console.log(products)
    return(
        <Layout />
    )
}

export default Api