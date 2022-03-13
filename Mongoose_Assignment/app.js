const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Product = require("./products");
require("./connection.js");

app.use(express.json());

//get all
app.get("/api/products", async(req, res) => {
    try {
        const productsData = await Product.find();
        res.status(200).send(productsData);
    } catch (e) { res.status(500).send(e); }
});
//getOne
app.get("/api/products/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const singleProductData = await Product.findById(_id);
        console.log(singleProductData);

        if (!singleProductData) {
            return res.status(404).send();
        } else {
            res.status(200).send(singleProductData);
        }
    } catch (e) {
        res.status(500).send(e);
    }

});

//Post data
// app.post("/api/products", function(req, res) {
//     console.log(req.body);
//     const user = new Product(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         console.log("Error Occurred");
//     })

// });

app.post("/api/products", async(req, res) => {
    try {
        console.log(req.body);
        const user = new Product(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e); }
});

//Put data
app.put("/api/products/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateProduct = await Product.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(updateProduct);
        console.log(updateProduct);
    } catch (e) {
        res.status(404).send(e);
    }
});

// app.patch("/api/products/:id", async(req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateProduct = await Product.findById(_id, req.body, { new: true });
//         res.send(updateProduct);

//     } catch (e) {
//         res.status(404).send(e);
//     }
// });

//Delete data
app.delete("/api/products/:id", async(req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);

        if (!req.params.id) {
            return res.status(404).send();
        } else {
            res.send(deleteProduct);
            console.log(deleteProduct);
        }

    } catch (e) {
        res.status(500).send(e);
    }

});

app.listen(3000);