const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    name: String,
    designation: String
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;