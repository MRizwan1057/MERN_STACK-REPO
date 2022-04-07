const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

var userSchema = mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "normal",
        // required: true,
    }, //admin,normal
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true,
    //     },
    // }, ],
});

userSchema.statics.validateUser = (data) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(3).max(22),
        password: Joi.string().min(5).max(20),
        email: Joi.string().email(),
        role: Joi.string().optional(),
    });
    return joiSchema.validate(data, { abortEarly: false });
};
userSchema.methods.generatePasswordHash = async function(password) {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
};

// userSchema.methods.generateToken = async function() {
//     try {
//         let privateKey = config.get("jwtprivatekey");
//         let token = jwt.sign({ _id: this._id, name: this.name }, privateKey);
//         // this.tokens = this.tokens.concat({ token: token });
//         // await this.save();
//         // return token;
//     } catch (err) {
//         console.log(err);
//     }
// };

const User = mongoose.model("User", userSchema);

module.exports = User;