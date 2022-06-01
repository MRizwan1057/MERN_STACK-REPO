import React, { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";
import productService from "../services/ProductService";
import {
  CircularProgress,
  Backdrop,
  makeStyles,
  Grid,
  MenuItem,
  Select,
} from "@material-ui/core";

import { toast } from "react-toastify";
import Pagination from "@material-ui/lab/Pagination";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(
    props.match.params.page ? props.match.params.page : 1
  );
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  console.log("Component rendered");
  useEffect(() => {
    productService
      .getAllProducts(page, perPage)
      .then((res) => {
        setProducts(res.result);
        setTotal(res.total);
        toast.success("Products Loaded");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error on Server");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, perPage]);
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {products.length == 0 ? (
          <div>No products</div>
        ) : (
          products.map((product, index) => {
            return <SingleProduct key={index} product={product} />;
          })
        )}
      </Grid>

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Pagination
        count={Math.ceil(total / perPage)}
        onChange={handlePageChange}
      />
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={perPage}
        onChange={(event) => {
          setPerPage(event.target.value);
        }}
      >
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </div>
  );
};

export default Products;
