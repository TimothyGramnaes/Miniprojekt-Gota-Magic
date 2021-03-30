import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./adminForm.css";
import { Button } from "@material-ui/core";
import { useProducts } from "../../Context/ProductContext";

function AdminForm() {
  const products = useProducts();
  // const [addedProduct, setAddedProduct] = useState<orderItem[]>([]);
  // setAddedProduct([...addedProduct]);
  const [values, setValues] = useState({
    productName: "",
    productPrice: "",
    productId: "",
    productImg: "",
    productCardText: "",
    productCmc: "",
    productCardType: "",
    productCardColor: "",
    productCardExpansion: "",
    productType: "",
    productCardRating: "",
    productView: true,
  });

  const handleProductNameInput = (event: any) => {
    setValues({ ...values, productName: event.target.value });
  };
  const handleProductPriceInput = (event: any) => {
    setValues({ ...values, productPrice: event.target.value });
  };
  const handleProductIdInput = (event: any) => {
    setValues({ ...values, productId: event.target.value });
  };
  const handleProductImgInput = (event: any) => {
    setValues({ ...values, productImg: event.target.value });
  };
  const handleProductCardText = (event: any) => {
    setValues({ ...values, productCardText: event.target.value });
  };
  const handelProductCardCmc = (event: any) => {
    setValues({ ...values, productCmc: event.target.value });
  };
  const handleProductCardType = (event: any) => {
    setValues({ ...values, productCardType: event.target.value });
  };
  const handleProductCardColor = (event: any) => {
    setValues({ ...values, productCardColor: event.target.value });
  };
  const handleCardExpansion = (event: any) => {
    setValues({ ...values, productCardExpansion: event.target.value });
  };
  const handleProductType = (event: any) => {
    setValues({ ...values, productType: event.target.value });
  };
  const handleProductCardRating = (event: any) => {
    setValues({ ...values, productCardRating: event.target.value });
  };

  console.log(values);
  console.log(products);
  return (
    <div>
      <form className="form-container" action="">
        <TextField
          label="Product name"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productName"
          variant="outlined"
          value={values.productName}
          onChange={handleProductNameInput}
          style={{ paddingBottom: "1rem" }}
          helperText="Produktens namn"
        />
        <TextField
          label="Product price"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productPrice"
          variant="outlined"
          className="form-padding"
          value={values.productPrice}
          onChange={handleProductPriceInput}
          style={{ paddingBottom: "1rem" }}
          helperText="Produktens pris"
        />
        <TextField
          label="Product id"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productId"
          variant="outlined"
          value={values.productId}
          onChange={handleProductIdInput}
          style={{ paddingBottom: "1rem" }}
          helperText="Ensiffrigt nummer"
        />
        <TextField
          label="Product img"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productImg"
          variant="outlined"
          value={values.productImg}
          onChange={handleProductImgInput}
          style={{ paddingBottom: "1rem" }}
          helperText="Lägg till en bildlänk"
        />
        <TextField
          label="Product card text"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productCardText"
          variant="outlined"
          value={values.productCardText}
          onChange={handleProductCardText}
          style={{ paddingBottom: "1rem" }}
          helperText="Produkt text"
        />
        <TextField
          label="Product Cmc"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productCmc"
          variant="outlined"
          value={values.productCmc}
          onChange={handelProductCardCmc}
          style={{ paddingBottom: "1rem" }}
          helperText="Ensiffrigt nummer"
        />
        <TextField
          label="Product card type"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productCardType"
          variant="outlined"
          value={values.productCmc}
          onChange={handleProductCardType}
          style={{ paddingBottom: "1rem" }}
          helperText="ex: Single"
        />
        <TextField
          label="Product card color"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productCardColor"
          variant="outlined"
          value={values.productCardColor}
          onChange={handleProductCardColor}
          style={{ paddingBottom: "1rem" }}
          helperText="Kortets färg"
        />
        <TextField
          label="Card expansion"
          id="standard-size-normal"
          defaultValue="Normal"
          name="CardExpansion"
          variant="outlined"
          value={values.productCardExpansion}
          onChange={handleCardExpansion}
          style={{ paddingBottom: "1rem" }}
          helperText="Ex: Tenth Edition "
        />
        <TextField
          label="Product type"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productType"
          variant="outlined"
          value={values.productType}
          onChange={handleProductType}
          style={{ paddingBottom: "1rem" }}
          helperText="Ex: Single "
        />
        <TextField
          label="Product card rating"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productCardRating"
          variant="outlined"
          value={values.productCardRating}
          onChange={handleProductCardRating}
          style={{ paddingBottom: "1rem" }}
          helperText="ensiffrigt nummer"
        />

        <Button variant="outlined" color="primary">
          Lägg till produkt{" "}
        </Button>
      </form>
    </div>
  );
}

export default AdminForm;
