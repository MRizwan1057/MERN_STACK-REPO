// const { validateProduct } = require("../models/Product");
module.exports = function(req, res, next) {

    try {
        let user = req.user;

        if (user.role === "admin") {
            next();
        } else {
            return res.status(401).send("You are not admin");
        }
    } catch (err) {
        console.log('err');

    }

};