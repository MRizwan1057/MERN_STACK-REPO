import { useState } from "react";
import { Carousel } from "react-bootstrap";

// const Home = (props) => {
//   return (
//     <>
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/curtain.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// </>
//   );
// };

export default Home;

// import React, { useState, useEffect } from "react";
// import SingleProduct from "./SingleProduct";
// import axios from "axios";
// import { Grid } from "@material-ui/core";
// const Products = (props) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   console.log("Component rendered");
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/products")
//       .then((res) => {
//         setProducts(res.data);
//         // console.log(res.data);
//       })
//       .catch((err) => {
//         setError(true);
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       {products.length === 0 ? (
//         error ? (
//           <div>Error</div>
//         ) : (
//           <div>Loading</div>
//         )
//       ) : (
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           spacing={1}
//         >
//           {products.map((product, index) => {
//             return <SingleProduct key={index} product={product} />;
//           })}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default Products;
