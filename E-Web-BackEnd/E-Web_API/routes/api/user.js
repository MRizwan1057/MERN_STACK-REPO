const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
var jwt = require("jsonwebtoken");
const _ = require("lodash");

router.post("/signup", async(req, res) => {
    try {
        let result = await User.findOne({ email: req.body.email });
        if (result === null && result === "") {
            return res.status(400).send("Can't be Empty, This is Required.");
        }
        if (result)
            return res.status(400).send("User with given email already exist.");
        result = new User();
        result.email = req.body.email;
        result.name = req.body.name;
        result.role = req.body.role;
        await result.generatePasswordHash(req.body.password);
        // res.cookie("jwtoken", token, {
        //     expires: new Date(Date.now() + 25892000000),
        //     httpOnly: true,
        // });
        result = await result.save();
        result = _.pick(result, ["name", "email", "role", "_id"]);
        res.send(result);
    } catch (err) {
        return res.status(401).send(err.message);
    }
});

router.post("/login", async(req, res) => {
    try {
        let { email, password } = req.body;
        let result = await User.findOne({ email: email });
        // if (result === null && result === "") {
        //     return res.status(400).send("Can't be Empty, This is Required.");
        // }
        if (!result) {
            return res
                .status(404)
                .send("User with given email was not found. Please Sign in first.");
        }

        let isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
            return res.status(404).send("Invalid Password");
        }

        //JWT
        let privateKey = config.get("jwtprivatekey");
        let token = jwt.sign({ _id: result._id, name: result.name, role: result.role },
            privateKey
        );
        // result = _.pick(result, ["name", "email", "role", "_id"]);
        // console.log(await _.omit(result, ["password"]));

        return res.send(token);
    } catch (err) {
        return res.status(401).send(err.message);
        console.log(err.message);
    }
});

// router.post("/signin", async(req, res) => {
//     try {
//         // let result = new User();
//         let { email, password } = req.body;
//         let result = await User.findOne({ email: email });
//         if (!result) {
//             return res.status(404).send("User with given email was not found");
//         }

//         let isValid = await bcrypt.compare(password, result.password);
//         if (!isValid) {
//             return res.status(404).send("Invalid Password");
//         }

//         //JWT
//         let token = await result.generateToken();
//         console.log(token);

//         // cookies

//         // res.cookie("jwtoken", token, {
//         //     expires: new Date(Date.now() + 25892000000),
//         //     httpOnly: true,
//         // });

//         // result = _.pick(result, ["name", "email", "role", "_id"]);
//         // console.log(await _.omit(result, ["password"]));

//         res.status(200).send(token);
//     } catch (err) {
//         return res.status(401).send(err.message);
//     }
// });

module.exports = router;