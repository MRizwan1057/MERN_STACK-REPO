import React from "react";

const Product = ({ name, price, solditems, prodimg }) => {
  return (
    <>
      <div>
        <img src={prodimg} alt="product image" />
        <h1 style={{ backgroundColor: "aqua", width: "30%" }}>
          Product Name :{name}
        </h1>
        <h4 style={{ backgroundColor: "orange" }}>Product Price :{price}</h4>
        <h5 style={{ backgroundColor: "pink" }}>Sold Items:{solditems}</h5>
      </div>
    </>
  );
};

export default Product;
