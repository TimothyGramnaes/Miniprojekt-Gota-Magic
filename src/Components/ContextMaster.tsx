import React from 'react'
import { ProductProvider } from '../Context/ProductContext'
import Layout from './Layout'


function ContextMaster() {
    return(
        <>
        <ProductProvider>
            <Layout />
        </ProductProvider>
        </>
    )
}

export default ContextMaster