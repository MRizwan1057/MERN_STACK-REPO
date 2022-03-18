const Joi = require("joi");
const mongoose = require("mongoose");
var schema = mongoose.Schema({
    name: String,
    email: { type: String, lowercase: true },
    password: String,
    roll_number: Number,
    status: { typ: Boolean, default: false },
});

schema.statics.validateStudent = (data) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(3).max(50),
        password: Joi.string().min(5).max(50),
        email: Joi.string().email(),
        roll_number: Joi.number().min(0),
        status: Joi.boolean(),

    });
    return joiSchema.validate(data, { abortEarly: false });
};

const Student = mongoose.model("Student", schema);

module.exports = Student;