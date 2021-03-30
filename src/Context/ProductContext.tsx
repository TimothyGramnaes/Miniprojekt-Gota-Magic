import React, { useState, createContext, FunctionComponent, useContext, useEffect } from 'react'
import { Product, products as mockedProducts } from '../DB/Products'

export const ProductContext = createContext<Context>(undefined!);

// Typing for items in ProductProvider
type Context = {
    products: Product[],
    getProductView: Product[],
    addProduct: (product: Product) => void;
    getIdFromProductList: (id:number) => void;
    ProductArray:(product: Product[]) => void
    
}

export const ProductProvider: FunctionComponent = ({ children }) => {
    // const [products, setProducts] = useState<Product[]>(mockedProducts)
    const [products, setProducts] = useState<Product[]>(mockedProducts)

    // const [viewProduct, setViewProduct] = useState<Product[]>([])
    const [productId, setProductId] = useState<number>(0)


    // useEffect(() => {
    //     setProducts(mockedProducts)
    // }, [])

    // This useEffect fetch the localStorage after the page is updated. 
    // If this is not running, the saved LS data will be deleted
    // Like ComponentDidMount
    useEffect(() => {   
        // ProductArray(products)
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

    // Get ID from productList when pressing "LÄS MER"
    // Then filter products to set that to a new useState
    // This state is used by Context on productPage
    const getIdFromProductList = (id:number) => {
        // useProductContext(id)
        setProductId(id) 
        // setViewProduct(getProductView)        
    }

    const ProductArray = (products:Product[]) => {
        setProducts(products)
    }

    const getProductView = products.filter((p) => {
        if(p.id === productId) {
           return productId
        }
        return null
    })

    return (
        <ProductContext.Provider value={{ products, getProductView, addProduct, getIdFromProductList, ProductArray }}>
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

