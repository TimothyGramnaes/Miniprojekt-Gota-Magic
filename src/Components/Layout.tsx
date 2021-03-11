import React from 'react'
import Footer from './Footer';
import LandingPage from './LandingPage'
import ProductList from './ProductList';

function Layout() {

    return(
        <>
            <LandingPage />
            <ProductList />
            <Footer />
        </>

    );

}

export  default Layout;