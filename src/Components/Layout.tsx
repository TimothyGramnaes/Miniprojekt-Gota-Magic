import React from 'react'
import Footer from './Footer';
import LandingPage from './LandingPage'
import ProductList from './ProductList';
import ProductPage from './ProductPage';

function Layout() {

    return(
        <>
            <ProductPage />
            {/* <LandingPage />
            <ProductList /> */}
            <Footer />
        </>

    );

}

export  default Layout;