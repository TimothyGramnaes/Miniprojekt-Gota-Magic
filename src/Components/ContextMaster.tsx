import React from 'react'
import { CheckoutProvider } from '../Context/CheckoutContext'
import { ProductProvider } from '../Context/ProductContext'
import Layout from './Layout'


function ContextMaster() {
    return(
        <>
        <CheckoutProvider>
            <ProductProvider>
                <Layout />
            </ProductProvider>
        </CheckoutProvider>
        </>
    )
}

export default ContextMaster