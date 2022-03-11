const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
    name: String,
    subjects: [String, { default: 2 }],
    teacher: {},
    teacherRelation: { type: mongoose.ObjectId, ref: "Teacher" },
});

const Student = mongoose.model("Students", studentsSchema);

module.exports = Student;