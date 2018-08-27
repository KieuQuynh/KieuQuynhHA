
const express= require('express');
const bodyParser= require('body-parser');
const fs= require('fs');

let app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.post('/ask',(req,res)=>{
//   req.on('data',(data)=>{
//       console.log(data);
//   });
console.log("hoang an");
console.log("Question:"+req.body.question);
fs.readFile('./questions.txt',(err,data)=>{
    if(err) throw err
    else {
       try {
           console.log("FileData :"+data);
           let questions=[];
            if(data!="" && JSON.parse(data).length){
                questions=JSON.parse(data);
                console.log(questions.length);
            }
        const newQuestion={ question:req.body.question}
        questions.push(newQuestion);
        console.log("FileData2 :"+questions);
        fs.writeFile('./questions.txt',JSON.stringify(questions),(err)=>{
            if(err) throw err
            else res.redirect('http://localhost:8080/');
        })
       } catch (error) {
           console.log("Error: "+error);
       }
    }
})
});
app.listen(6969,(err)=>{
    if(err) throw err
    else console.log("Server is listening at port 6969! ");
});


