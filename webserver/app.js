const express= require('express');
const path=require('path');
const url=require('url');
let app= express();
app.get('/:id',(req,res)=>{

    // var q=url.parse(req.url,true);
    // var p=q.query;
   var id= req.params.id;
    res.send(id);
  // res.send("Hello  "+p.name);
})

// app.get('/',(req,res)=>{
//     console.log("home");
   
//   // res.sendFile(__dirname+"/FE-CSS(BTVN_Buoi2)/FE-CSS/index.html");
//   res.sendFile(path.resolve(__dirname,'../FE-CSS(BTVN_Buoi2)/FE-CSS/index.html'));
// })
//fix lỗi ko load đc file .css
//c1(bad idea)

// app.get('/style.css',(req,res)=>{
//     console.log("home");
//   res.sendFile(path.resolve(__dirname,'../FE-CSS(BTVN_Buoi2)/FE-CSS/style.css'));
// })

//các thư mục đều thuộc về server khi sử dụng express.static cho phép người dùng truy cập 
//vào các thư mục này
//app.use(express.static("../FE-CSS(BTVN_Buoi2)/FE-CSS"));

app.listen(6969,(err)=>{
    if(err) console.log(err)
    else console.log("server is listening at port 6969");
})
