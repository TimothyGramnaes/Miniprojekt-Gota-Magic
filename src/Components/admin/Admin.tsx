import React from 'react'
import { Switch, Route } from "react-router-dom";
import AdminProduct from './AdminProduct';
import AdminProductsList from './AdminProductsList';
import AdminNewProduct from './AdminNewProduct';

function Admin() {

    return(
        <>
        <p>Admin page</p>
        <Switch>
            <Route path="/admin/products" component={AdminProductsList} />
            <Route path="/admin/products/:id" component={AdminProduct} />
            <Route path="/admin/products/new-product" component={AdminNewProduct} />
        </Switch>
        </>
    )
}

export default Admin