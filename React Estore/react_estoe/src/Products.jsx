// import React, { useState, useEffect } from "react";
// import SingleProduct from "./SingleProduct";
// import productService from "./services/ProductService";
// import {
//   Backdrop,
//   CircularProgress,
//   Fab,
//   Grid,
//   makeStyles,
// } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
// import { toast } from "react-toastify";
// const Products = (props) => {
//   const useStyles = makeStyles((theme) => ({
//     addBtn: {
//       position: "fixed",
//       bottom: theme.spacing(1),
//       right: theme.spacing(1),
//     },
//   }));
//   const classes = useStyles();
//   const [products, setProducts] = useState([]);
//   // const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);
//   console.log("Component rendered");
//   const getProducts = () => {
//     setLoading(true);
//     productService
//       .getAllProducts()
//       .then((res) => {
//         setProducts(res);
//         toast.success("Data Loaded");
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Error in Server");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };
//   useEffect(getProducts, []);
//   return (
//     <div>
//       <Fab
//         color="primary"
//         aria-label="add"
//         className={classes.addBtn}
//         onClick={() => {
//           props.history.push("/products/add");
//           console.log("Add product");
//         }}
//       >
//         <AddIcon />
//       </Fab>
//       <h1>All products</h1>

//       <Backdrop className={classes.backdrop} open={loading}>
//         <CircularProgress color="inherit" />
//       </Backdrop>

//       <Grid container spacing={3}>
//         {products.map((product, index) => {
//           return (
//             <Grid item xs={4} key={index}>
//               <SingleProduct product={product} onDelete={getProducts} />
//             </Grid>
//           );
//         })}
//       </Grid>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import productService from "./services/ProductService";
import {
  CircularProgress,
  Backdrop,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { toast } from "react-toastify";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("Component rendered");
  useEffect(() => {
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res);
        toast.success("Products Loaded");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error on Server");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* className={classes.backdrop} */}
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
      )
    </div>
  );
};

export default Products;
