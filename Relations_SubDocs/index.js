const express = require("express");
const app = express();
const Student = require("./Models/student");
const Teacher = require("./Models/teacher");
app.listen(8081);
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/School")
    .then(async() => {
        console.log("DB connected");

        let teacher = new Teacher();
        teacher.name = "Usman SK";
        teacher.designation = "Senior";
        teacher = await teacher.save();
        let student = new Student();
        student.name = "Adnan";
        student.subjects = ["Node", "React", "Express"];

        student.teacherRelation = teacher._id;

        student = await student.save();

        console.log(teacher);

        // let data = await Student.findOne({ "name:": "Adnan" }).populate(
        //     "teacherRelation"
        // );
        // console.log(data);
    })
    .catch((error) => {
        console.log("Error connecting db");
        console.log(error);
    });