//import your files from anywhere 

const sum = require("./sum");
const { sub, div, mul } = require("./calculator");
console.log(sum(10, 10));
console.log(sub(10, 5));
console.log(div(10, 2));
console.log(mul(10, 10));

const axios = require("axios");
axios
    .get("https://haseeb-apis.herokuapp.com/api/person")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });