const Team = require("./team.js");

const createPlayer = async(name, age, status, country) => {
    let myTeam = new Team({
        name: name,
        country: country,
        age: age,
        status: status
    });
    // myTeam.name = name;
    // myTeam.country = country;
    // myTeam.age = age;
    // myTeam.status = status;
    await myTeam.save();
    return myTeam;
}


const updatePlayer = async(_id, name, age, status, country) => {
    let myTeam = await Team.findById(_id);
    myTeam.name = name;
    myTeam.country = country;
    myTeam.age = age;
    myTeam.status = status;
    await myTeam.save();
    return myTeam;
}


const getAllPlayers = async() => {
    let players = await Team.find();
    return players;
}

const removePlayer = async(_id) => {
    let player = await Team.findByIdAndDelete(_id);
    return player;
}


module.exports = {
    createPlayer,
    getAllPlayers,
    removePlayer,
    updatePlayer
};
// module.exports = getAllPlayers;
// module.exports = removePlayer;
// module.exports = updatePlayer;