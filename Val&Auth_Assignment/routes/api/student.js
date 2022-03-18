const express = require("express");
const Student = require("../../models/Student");
const router = express.Router();
// const { validateStudent } = require("../../models/Student");
const bcrypt = require("bcryptjs");
const _ = require("lodash");

const jwt = require("jsonwebtoken");
const config = require("config");


router.get("/signup", async(req, res) => {
    try {

        let result = await Student.findOne({ email: req.body.email })
        if (result) return res.status(400).send("Student with given email already exist.");
        result = new Student();
        result.name = req.body.name;
        result.email = req.body.email;
        let salt = await bcrypt.genSalt(10);
        result.password = await bcrypt.hash(req.body.password, salt);
        result.roll_number = req.body.roll_number;
        result.status = req.body.status;
        result = await result.save();
        result = _.pick(result, ["_id", "name", "email", "roll_number"]);
        return res.send(result);
    } catch (err) {
        return res.status(401).send(err.message);
    }
});

//Sign in


router.post("/signin", async(req, res) => {
    try {
        // let result = new User();
        let { email, password } = req.body;

        let result = await Student.findOne({ email: email });
        if (!result) {
            return res.status(404).send("Student with given email was not found");
        }

        let isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
            return res.status(404).send("Invalid Password");
        }

        result = _.pick(result, ["name", "email", "_id", "roll_number", ]);
        // console.log(await _.omit(result, ["password"]));

        let token = jwt.sign({ "name": "result.name", "email": "result.email" }, config.get("jwtpvtkey"));

        return res.send(token);
        // return res.send(result);
    } catch (err) {
        return res.status(401).send(err.message);
    }
});



// router.post("/", async(req, res) => {
//     try {
//         let result = new Student();
//         result.name = req.body.name;
//         result.email = req.body.email;
//         result.password = req.body.password;
//         result.roll_number = req.body.roll_number;
//         result.status = req.body.status;

//         result = await result.save()
//         res.send(result);
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err.message);
//     }
// });


router.get("/", async function(req, res) {
    try {
        // console.log(req.query);
        let page = Number(req.query.page);
        let perPage = Number(req.query.perPage);

        page = (page - 1) * perPage;
        // console.log(page, perPage);

        let result = await Student.find(req.body).skip(page).limit(perPage);

        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});




router.get("/:id", async function(req, res) {
    try {
        let result = await Student.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Student with given ID not found");
        }
        return res.send(result);
    } catch (err) {
        console.log(err);
        // res.status(400).send(err.message);
        return res.status(400).send("The format of id is not correct");
    }
});



router.put("/:id", async function(req, res) {
    try {
        let result = await Student.findById(req.params.id);
        if (!result) {
            return res.status(400).send("The record with given id was not found");
        }
        result = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});




router.delete("/:id", async function(req, res) {
    try {
        let result = await Student.findById(req.params.id);
        if (!result) {
            return res.status(400).send("record with given ID not found");
        }
        result = await Student.findByIdAndDelete(req.params.id);
        return res.send(result);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
        // res.status(400).send("The format of id is not correct");
    }
});





module.exports = router;