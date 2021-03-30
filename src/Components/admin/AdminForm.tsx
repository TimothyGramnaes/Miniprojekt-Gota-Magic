import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./adminForm.css";
import { orderItem } from "../../Types/orderItem";

function AdminForm() {
  type form = {
    newProduct: orderItem[];
  };
  let product: orderItem = {
    itemName: "",
    img: "",
    quantity: 0,
    id: 0,
    price: 0,
  };

  const [newProduct, setNewProduct] = useState<orderItem[]>([]);
  setNewProduct([...newProduct, product]);
  console.log(newProduct);
  return (
    <div>
      <form className="form-container" action="">
        <TextField
          label="Product name"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productName"
          variant="outlined"
          className="form-padding"
          value={product.itemName}
        />
        <TextField
          label="Product price"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productPrice"
          variant="outlined"
          className="form-padding"
          value={product.price}
        />
        <TextField
          label="Product id"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productId"
          variant="outlined"
          value={product.id}
        />
        {/* <TextField
          label="Product img"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productImg"
          variant="outlined"
          value={product.img}
        />
        <TextField
          label="Product quantity"
          id="standard-size-normal"
          defaultValue="Normal"
          name="productQuantity"
          variant="outlined"
          value={product.quantity}
        /> */}
      </form>
    </div>
  );
}

export default AdminForm;
