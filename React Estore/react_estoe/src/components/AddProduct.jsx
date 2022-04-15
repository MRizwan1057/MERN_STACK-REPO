import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import productService from "../services/ProductService";
const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [soldQty, setsoldQty] = useState(0);

  // post request of axios
  const addProductClick = () => {
    productService
      .createProduct({ name, price, soldQty })
      .then((res) => {
        console.log(res);
        props.history.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <h1>Add New Product</h1>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              label="Price"
              fullWidth
              value={price}
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <TextField
              label="soldQty"
              fullWidth
              value={soldQty}
              type="soldQty"
              onChange={(event) => {
                setsoldQty(event.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "5px" }}
              onClick={addProductClick}
            >
              Add Product
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProduct;
