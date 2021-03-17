import React, { useState, createContext, FunctionComponent, useContext, useEffect } from 'react'
import { Product, products as mockedProducts } from '../DB/Products'

export const ProductContext = createContext<Context>(undefined!);

// Typing for items in ProductProvider
type Context = {
    products: Product[],
    addProduct: (product: Product) => void;
}

export const ProductProvider: FunctionComponent = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(mockedProducts)
    
    // This useEffect fetch the localStorage after the page is updated. 
    // If this is not running, the saved LS data will be deleted
    // Like ComponentDidMount
    useEffect(() => {   
        const data = localStorage.getItem('products') || "[]"
        if (data) {
            setProducts(JSON.parse(data))
        }
    }, [])

    // This useEffect saves the userObject to LS
    // Like ComponentDidUpdate
    useEffect(() => {    
        localStorage.setItem('products', JSON.stringify(products))
    })

    // Add product to products
    const addProduct = (product: Product) => {}


    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductContext.Provider>
    )    
};

// Custom Hooks

// Using all in ProductContext
export const useProductContext = () => useContext<Context>(ProductContext)
// Using only the products array
export const useProducts = () => {
    const value = useProductContext();
    return value.products;
}

