const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: String,
    country: String,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;