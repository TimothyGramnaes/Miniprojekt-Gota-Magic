import { Grid } from "@material-ui/core";
import React from "react";

import { useProducts } from "../../Context/ProductContext";
import ProductListCardAdmin from "../ProductListCard";
import AdminForm from "./AdminForm";

function AdminProductsList() {
  const products = useProducts();

  console.log(products);

  const productData = products.map((product) => (
    <div key={product.id}>
      {/* Link is to show the right product on ProductPage.
                    The product.id is set in the URL string, and shows the right product that has the ID. */}

      <ProductListCardAdmin
        productname={product.productname}
        price={product.price}
        image={product.image}
        id={product.id}
      />
    </div>
  ));

  return (
    <Grid container xs={12} justify="center" alignItems="center">
      {productData}
    </Grid>
  );
}

export default AdminProductsList;
