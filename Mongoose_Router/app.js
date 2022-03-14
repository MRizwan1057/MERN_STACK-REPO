const mongoose = require("mongoose");
const Product = require("./products");
const router = require("./Routes.js");
const express = require("express");
const app = express();

const port = process.env.Port || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connection is made at ${port}`);
});