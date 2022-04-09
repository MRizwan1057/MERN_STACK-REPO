import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import productService from "./services/ProductService";
import { Grid } from "@material-ui/core";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  console.log("Component rendered");
  useEffect(() => {
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.length === 0 ? (
        error ? (
          <div>Error</div>
        ) : (
          <div>Loading</div>
        )
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {products.map((product, index) => {
            return <SingleProduct key={index} product={product} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Products;
