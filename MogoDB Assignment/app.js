const mongoose = require("mongoose");

const express = require("express");
const app = express();
const Product = require("./products")
    // let products = ["Shampoo", "Dove"];

app.use(express.json());

// default
app.get("/", function(req, res) {
    res.send("Hello World I am here");
});

//get all
app.get("/api/products", function(req, res) {
    res.send(products);
});
//getOne
app.get("/api/products/:id", function(req, res) {
    res.send(products[req.params.id]);
});

//Post data
app.post("/api/products", function(req, res) {
    var data = req.body;
    products.push(data.name);
    res.send(data.name);
    //   res.send("Product created");
});
//Put data
app.put("/api/products/:id", function(req, res) {
    var data = req.body;
    console.log(data);
    products[req.params.id] = data.name;
    res.send(data.name);
    // var productToEdit = products[req.params.id];

    // productToEdit = data.name;

    // products[req.params.id] = productToEdit;
    // res.send(productToEdit);
    //   res.send("Product created");
});
//Delete data
app.delete("/api/products/:id", function(req, res) {
    var product = products[req.params.id];
    products.splice(req.params.id, 1);

    res.send(product);
    //   res.send("Product created");
});

app.listen(3030);












const {
    createProduct,
    getAllProducts,
    removeProduct,
    updateProduct
} = require("./crudOperations.js");



mongoose
    .connect("mongodb://localhost/ProductStore")
    .then(async() => {
        console.log("DB connected");

        // let product = await createProduct("Dove", 120);
        // console.log(product);
        let allProducts = await getAllProducts();
        console.log(allProducts);
        //         console.log(await removeProduct("62266d8562c24798e5750223"));

        //         let updateProduct = await updateProduct("62266cdf01d0ec5f0179f3a1", "Sensodyne", 464,);
        //         console.log(updateProduct);

        //         // Operators with Mongoose

        //         const getDocuments = async() => {
        //             try {
        //                 const result = await Product
        //                     // .find({ $and: [{ status: "Active" }, { country: "RSA" }] })
        //                     .find({ status: "Active" })
        //                     .select({ name: 1 })
        //                     // .countDocuments();
        //                     .sort({ name: -1 })
        //                 console.log(result);
        //             } catch (err) {
        //                 console.log(err);

        //             }
        //         }

        //         getDocuments();

    })
    .catch((error) => {
        console.log("Error connecting db");
        console.log(error.message);
    });