var express = require("express");
var router = express.Router();
const Teacher = require("../../models/Teacher");
// const validateTeacher = require("../../middlewares/validator");

const _ = require("lodash");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const config = require("config");
// const { validateTeacher } = require("../../models/Teacher");

//*****Sign Up******

router.get("/signup", async(req, res) => {
    try {
        let result = await Teacher.findOne({ email: req.body.email })
        if (result) return res.status(400).send("Teacher with given email already exist.");
        result = new Teacher();
        result.name = req.body.name;
        result.age = req.body.age;
        result.email = req.body.email;
        result.designation = req.body.designation;
        let salt = await bcrypt.genSalt(10);
        result.password = await bcrypt.hash(req.body.password, salt);
        result = await result.save();
        result = _.pick(result, ["_id", "name", "age", "email", "designation"]);
        return res.send(result);
    } catch (err) {
        return res.status(401).send(err.message);
    }
});

//Sign in


router.get("/signin", async(req, res) => {
    try {
        // let result = new User();
        let { email, password } = req.body;

        let result = await Teacher.findOne({ email: email });
        if (!result) {
            return res.status(404).send("Teacher with given email was not found");
        }

        let isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
            return res.status(404).send("Invalid Password");
        }

        result = _.pick(result, ["name", "email", "_id", "designation", "age"]);
        // console.log(await _.omit(result, ["password"]));

        // res.send(result);
        let token = jwt.sign({ "name": "result.name", "email": "result.email" }, config.get("jwtpvtkey"));

        return res.send(token);
        // console.log("Logged in Successfully");

    } catch (err) {
        return res.status(401).send(err.message);
    }
});





router.get("/", async function(req, res) {
    try {
        // console.log(req.query);
        let page = Number(req.query.page);
        let perPage = Number(req.query.perPage);

        page = (page - 1) * perPage;
        // console.log(page, perPage);

        let result = await Teacher.find(req.body).skip(page).limit(perPage);

        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});
router.get("/:id", async function(req, res) {
    try {
        let result = await Teacher.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Teacher with given ID not found");
        }
        return res.send(result);
    } catch (err) {
        console.log(err);
        // res.status(400).send(err.message);
        return res.status(400).send("The format of id is not correct");
    }
});
// router.post("/", async function(req, res) {
//     try {
//         let result = new Teacher();
//         result.name = req.body.name;
//         result.age = req.body.age;
//         result.email = req.body.email;
//         result.password = req.body.password;
//         result.designation = req.body.designation;
//         result = await result.save();
//         return res.send(result);
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err.message);
//     }
// });
router.put("/:id", async function(req, res) {
    try {
        let result = await Teacher.findById(req.params.id);
        if (!result) {
            return res.status(400).send("The record with given id was not found");
        }

        //Another way to do this
        // result.name = req.body.name;
        // result.price = req.body.price;
        // result = await result.save();

        //{new:true} is an option to get updated data from
        //findByIdAndUpdate function. Otherwise it will return old data.
        result = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.send(result);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});
router.delete("/:id", async function(req, res) {
    try {
        let result = await Teacher.findById(req.params.id);
        if (!result) {
            return res.status(400).send("record with given ID not found");
        }
        result = await Teacher.findByIdAndDelete(req.params.id);
        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
        // res.status(400).send("The format of id is not correct");
    }
});
// router.delete("/deletePage", async function (req, res) {
//   try {
//     let page = Number(req.query.page);
//     let perPage = Number(req.query.perPage);

//     let result = await Product.find(req.body).skip(page).limit(perPage);
//     result.forEach(async (data)=>{
//       await data.delete();
//     })
//
//     res.send(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err.message);
//     // res.status(400).send("The format of id is not correct");
//   }
// });

module.exports = router;