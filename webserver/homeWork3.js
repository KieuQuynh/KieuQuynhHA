const express= require('express');
const url=require('url');
let app=express();
app.get('/',(req,res)=>{
    var q=url.parse(req.url,true);
    res.send("Hello:"+ q.query.name);
})
app.get('/:name',(req,res)=>{
 var name= req.params.name;
 res.send("Hello :"+name);
})



app.listen(8080,(err)=>{
if(err) throw err
else {
    console.log("Serving is working at 8080 port!!");
}
})