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

        // let team = await createPlayer("M.Rizwan", 26, "Active", "Pak");
        // console.log(team);
        // let allPlayes = await getAllPlayers();
        // console.log(allPlayes);
        // console.log(await removePlayer("62266d8562c24798e5750223"));

        // let updatedPlayer = await updatePlayer("62266cdf01d0ec5f0179f3a1", "Boom Boom Afridi", 44, "Retired", "PK");
        // console.log(updatedPlayer);

        // Operators with Mongoose

        const getDocuments = async() => {
            try {
                const result = await Team
                    // .find({ $and: [{ status: "Active" }, { country: "RSA" }] })
                    .find({ status: "Active" })
                    .select({ name: 1 })
                    // .countDocuments();
                    .sort({ name: -1 })
                console.log(result);
            } catch (err) {
                console.log(err);

            }
        }

        getDocuments();

        // let result = await Team.find();
        // console.log(result);
        // let alldocs = await Team.countDocuments();
        // console.log(alldocs);
        // let sortDocs = await Team.sort({ name: 1 });
        // console.log(sortDocs);


    })
    .catch((error) => {
        console.log("Error connecting db");
        console.log(error.message);
    });