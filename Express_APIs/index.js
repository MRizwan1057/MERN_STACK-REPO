const express = require('express')
const app = express();
app.use(express.json());
const players = [{ "name": "Imran Nazir", "shirt": 17 }, { "name": "Shoaib Malik", "shirt": 18 }, { "name": "Shahid Afridi", "shirt": 10 }, { "name": "AB Devilliers", "shirt": 17 }, { "name": "Quinton DeKOck", "shirt": 12 }, { "name": "MS Dhoni", "shirt": 7 }, { "name": "Muhammad Amir", "shirt": 5 }, { "name": "Pat Cummins", "shirt": 30 }];

app.get('/', function(req, res) {
    res.send('Hello to  the home page')
});


// app.get('/kuchor', function(req, res) {
//     res.send('yahan kia kr rhe ho??')
// });


app.get('/api/players', function(req, res) {
    res.send(players);
});

app.get('/api/players/:id', function(req, res) {
    if (!players[req.params.id])
        return res.status(400).send("Players not found");
    res.send(players[req.params.id]);
});


app.put('/api/players/:id', function(req, res) {
    console.log(req.body);
    players[req.params.id] = req.body;
    res.send(players[req.params.id]);
});

app.delete('/api/players/:id', function(req, res) {
    dltplayer = players[req.params.id];
    players.splice(req.params.id, 1);
    res.send(dltplayer);
});

app.post('/api/players', function(req, res) {
    players.push(req.body);
    res.send(players);
});
app.listen(3000)