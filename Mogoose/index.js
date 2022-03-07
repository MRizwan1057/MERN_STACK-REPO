const express = require("express");
const app = express();
const Team = require("./team.js");
const {
    createPlayer,
    getAllPlayers,
    removePlayer,
    updatePlayer
} = require("./crudOperations.js");

app.listen(3000);

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/Squad")
    .then(async() => {
        console.log("DB connected");
        // let team = await createPlayer("Pat Cummins", 29, "Active", "AUS");
        // console.log(team);
        // let allPlayes = await getAllPlayers();
        // console.log(allPlayes);
        // console.log(await removePlayer("62266d8562c24798e5750223"));

        let updatedPlayer = await updatePlayer("62266cdf01d0ec5f0179f3a1", "Boom Boom Afridi", 44, "Retired", "PK");
        console.log(updatedPlayer);
        // let result = await Team.find({ name: "Shoaib Malik" });
        // console.log(result);


    })
    .catch((error) => {
        console.log("Error connecting db");
        console.log(error);
    });