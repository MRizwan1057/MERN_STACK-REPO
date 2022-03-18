const Joi = require("joi");
const mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: String,
    email: { type: String, lowercase: true },
    password: String,
    age: Number,
    designation: String,
});
schema.statics.validateTeacher = (data) => {
    const joischema = Joi.object({
        name: Joi.string().min(3).max(20),
        email: Joi.string().min(5).max(50),
        password: Joi.string().min(5).max(50),
        age: Joi.number().min(0),
        designation: Joi.string(),
    });
    return joischema.validate(data, { abortEarly: false });
};

var Teacher = mongoose.model("Teacher", schema);

module.exports = Teacher;
// module.exports.validateProduct = validateProduct;