const express = require("express");
const router = new express.Router();
require("./connection.js");
const Product = require("./products")

router.get("/api/products", async(req, res) => {
    try {
        const productsData = await Product.find();
        res.send(productsData);
    } catch (e) { res.send(e); }
});
//getOne
router.get("/api/products/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const singleProductData = await Product.findById(_id);
        console.log(singleProductData);

        if (!singleProductData) {
            return res.status(404).send();
        } else {
            res.send(singleProductData);
        }
    } catch (e) {
        res.status(500).send(e);
    }

});

//Post data
// router.post("/api/products", function(req, res) {
//     console.log(req.body);
//     const user = new Product(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         console.log("Error Occurred");
//     })

// });

router.post("/api/products", async(req, res) => {
    try {
        console.log(req.body);
        const user = new Product(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e); }
});

//Put data
router.put("/api/products/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateProduct = await Product.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateProduct);
        console.log(updateProduct);
    } catch (e) {
        res.status(404).send(e);
    }
});

// router.patch("/api/products/:id", async(req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateProduct = await Product.findById(_id, req.body, { new: true });
//         res.send(updateProduct);

//     } catch (e) {
//         res.status(404).send(e);
//     }
// });

//Delete data
router.delete("/api/products/:id", async(req, res) => {
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



module.exports = router;