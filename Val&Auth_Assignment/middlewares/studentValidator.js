const Student = require("../models/Student");

module.exports = function(req, res, next) {
    let { error } = Student.validateStudent(req.body);
    if (error) {
        console.log(error);
        res.status(401).send(error.message);
    }
    next();
};