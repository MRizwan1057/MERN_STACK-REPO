import React from "react";
// import Account from "./Components/Account";
// import Contact from "./Components/Contact";
// import Home from "./Components/Home";
import Product from "./Components/Product";
import "./index";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Salaam</h1>
      {/* <Home />
      <Account />
      <Contact /> */}
      <Product
        prodimg="https://picsum.photos/200/300"
        name="Mouse"
        price="500 PKR"
        solditems="55"
      />
      <Product
        prodimg="https://picsum.photos/200/300
        "
        name="Book"
        price="1100 PKR"
        solditems="95"
      />
      <Product
        prodimg="https://picsum.photos/200/300"
        name="Kit"
        price="300 PKR"
        solditems="155"
      />
    </div>
  );
};

export default App;
