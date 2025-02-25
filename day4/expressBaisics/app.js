const express = require('express');
const app = express(); 

//middleware
// app.use('/home',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>response from server</h1>')
//     console.log(res);

// })

app.get('/thakgaaye',(req,res)=>{
    res.send('<h1>response from my route -> thakna mana hai</h1>');
})

app.get('/welcome',(req,res)=>{
    res.send('<h1>response from my route -> KLEBCA</h1>');
})




app.listen(8080,()=>{
  console.log('server is runing at port 8080');
})

app.get('/changes',(req,res)=>{
    res.send("hello jiiiiii");
})