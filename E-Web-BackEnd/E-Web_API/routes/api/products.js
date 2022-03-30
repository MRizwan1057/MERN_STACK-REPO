var express = require("express");
var router = express.Router();
const Product = require("../../models/Product");
const auth = require("../../middlewares/auth");
const isadmin = require("../../middlewares/isadmin");
const { sortedLastIndex } = require("lodash");
// const { validateProduct } = require("../../models/Product");

//getAll route

router.get("/", async function(req, res) {
    try {
        // console.log(req.query);
        let page = Number(req.query.page);
        let perPage = Number(req.query.perPage);

        page = (page - 1) * perPage;
        // console.log(page, perPage);

        let result = await Product.find(req.body).skip(page).limit(perPage);

        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//getOne route

router.get("/:id", async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Product with given ID not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        console.log(err);
        // return res.status(400).send(err.message);
        return res.status(400).send("The format of id is not correct");
    }
});
router.post("/", auth, isadmin, async function(req, res) {
    try {
        // console.log(` the secret key is: ${req.cookies.jwtoken}`);
        let result = await Product.findOne({
            name: req.body.name,
        });

        if (result)
            return res.status(400).send("Product with given details already exist.");
        else result = new Product();
        result.name = req.body.name;
        result.price = req.body.price;
        result.soldQty = req.body.soldQty;
        result = await result.save();
        return res.status(200).send(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});
router.put("/:id", auth, isadmin, async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            return res.status(400).send("The record with given id was not found");
        }

        result = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});
router.delete("/:id", auth, isadmin, async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            return res.status(400).send("record with given ID not found");
        }
        result = await Product.findByIdAndDelete(req.params.id);
        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
        // return res.status(400).send("The format of id is not correct");
    }
});

module.exports = router;