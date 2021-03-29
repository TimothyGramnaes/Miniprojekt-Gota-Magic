import React from 'react'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import AdminProduct from './AdminProduct';
// import AdminProductsList from './AdminProductsList';
// import AdminNewProduct from './AdminNewProduct';
import AdminForm from './AdminForm';
import { CSSProperties } from '@material-ui/styles';
import { Button } from '@material-ui/core';

function Admin() {

    const mainStyle: CSSProperties = {
        paddingTop: '4rem'
    }

    return(
            <div style={mainStyle}>
            <p style={mainStyle}>Admin page</p>
            <Link to="/admin/new-product">
            <Button>Ny produkt</Button>
            </Link>
            <Link to="/admin/productspage">
            <Button>Ändra produkt</Button>
            </Link>      
            <Link to="../">
            <Button>Till front</Button>
            </Link>      
            <Switch>        
                <Route exact path="/admin/products/:id" component={AdminProduct} />
                <Route exact path="/admin/productspage/" component={AdminProduct} />
                <Route exact path="/admin/new-product" component={AdminForm} />      
            </Switch>
            <AdminProduct />
            <AdminForm />
            </div>
    )
}

export default Admin