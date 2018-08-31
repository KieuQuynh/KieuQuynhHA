
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Origin-Headers', 'Content-Type');
    next();
})
app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.post('/ask', (req, res) => {
    //   req.on('data',(data)=>{
    //       console.log(data);
    //   });
    console.log("hoang an");
    console.log("Question:" + req.body.question);
    fs.readFile('./questions.txt', (err, data) => {
        if (err) throw err
        else {
            try {
                console.log("FileData :" + data);
                let questions = [];
                if (data != "" && JSON.parse(data).length) {
                    questions = JSON.parse(data);

                }
                const newQuestion = {
                    id: questions.length + 1,
                    questionContent: req.body.question,
                    yes: 0,
                    no: 0
                }
                questions.push(newQuestion);

                fs.writeFile('./questions.txt', JSON.stringify(questions), (err) => {
                    if (err) throw err
                    else res.redirect('http://www.google.com');
                })
            } catch (error) {
                console.log("Error: " + error);
            }
        }
    })
});
let x;
app.get('/answer', (req, res) => {
    fs.readFile('./questions.txt', (err, data) => {
        if (err) throw err
        else {
            try {
                let questions = JSON.parse(data);
                let m = Math.floor(Math.random() * questions.length)
                let randomQuestion = questions[m];
                x=randomQuestion;
                res.send(randomQuestion);
               
                console.log(randomQuestion);
            } catch (error) {
                console.log("Error", error);
            }

        }
    })
})


app.get('/a',(req,res)=>{
    res.send(x);
})
app.put('/q', (req, res) => {


    fs.readFile('./questions.txt', (err, data) => {
        if (err) throw err
        else {
            try {
                questions = JSON.parse(data);
                let a = req.body.answer;
              
                x = questions[req.body.questionID - 1];
                   x[a]=x[a]+1;
                
               
                console.log(req.body.answer);
                fs.writeFile('./questions.txt', JSON.stringify(questions), (err) => {
                    if (err) throw err
                    else {
                        console.log('success!!2');

                    }
                })

       } catch (error) {
                console.log("Error sss:", error);
            }

        }
    })




})


app.listen(6969, (err) => {
    if (err) throw err
    else console.log("Server is listening at port 6969! ");
});


