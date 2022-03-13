const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/ProductStore")
    .then(async() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.log("Error connecting db");
        console.log(error.message);
    });