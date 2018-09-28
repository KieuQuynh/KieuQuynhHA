const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ScoreModel = require('./models/questionModel');
let app = express();

mongoose.connect('mongodb://localhost/SaveScore', (err) => {
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


app.post('/namePlayer', (req, res) => {
    const newMatch = {
        name: [req.body.player1, req.body.player2, req.body.player3, req.body.player4],

    }
    ScoreModel.create(newMatch, (err, newMathCreated) => {
        if (err) throw err
        else {
          res.redirect(`playGame.html?gameID=${newMathCreated._id}`);
        }
    })

})



app.put('/score', (req, res) => {
    const { col, row, score, id } = req.body;
  
    ScoreModel.findById(id, (err, matchFound) => {
        if (err) console.log("loiix đay nhé");
        if (!matchFound) res.send({ message: 'not found match', match: null })
        else {
            let x = 'score' + col;
          
            if (matchFound.result[row] == null) {
                let y = { score1: 0, score2: 0, score3: 0, score4: 0 };
                y[x] = score;
                matchFound.result.push(y);
            }
            else {
                matchFound.result[row][x] = score;
               
        
        
            }
            matchFound.save((err, matchUpdate) => {
                if (err) throw err
                else res.send({ message: 'Success', match: matchUpdate })
            })
        }

     

    })

})

app.post('/loaddata',(req,res)=>{
    let id =req.body.gameID;
    ScoreModel.findById(id,(err,matchFound)=>{
        if(err) throw err;
        else res.send(matchFound);
    })

})

app.listen(8080, (err) => {
    if (err) throw err
    else console.log("server is running at 8080 port");
})