const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const QuestionModel = require('./models/questionModel');
let app = express();

mongoose.connect('mongodb://localhost/minihack', (err) => {
    if (err) console.log(err);
    else {
        console.log("DB connect");
    }
})
app.use(express.static('./Views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Views/createGame.html'));
})
let p1;
let p2;
let p3;
let p4;
app.post('/games/hoangan', (req, res) => {
    p1 = req.body.player1;
    p2 = req.body.player2;
    p3 = req.body.player3;
    p4 = req.body.player4;
    let x = {
        name: [p1, p2, p3, p4]

    }
    QuestionModel.create(x, (err, y) => {
        if (err) throw err
        else {
            app.get('/games/player', (req, res) => {
                res.send({ id: y._id, player1: p1, player2: p2, player3: p3, player4: p4 });
            })
          //  res.sendFile(path.resolve(__dirname, './Views/playGame.html'));

        }
    })
    // app.get('/games/player', (req, res) => {
    //     res.send({ player1: p1, player2: p2, player3: p3, player4: p4 });
    // })
    res.sendFile(path.resolve(__dirname, './Views/playGame.html'));
})


app.listen(8080, (err) => {
    if (err) throw err
    else console.log("server is running at 8080 port");
})