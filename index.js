const express =require("express");
const PORT=3000;
const app=express();
app.get("/",(req,res)=>{
    res.send('<h1>HELLO WORLD</h1>')
})
app.listen (3000,()=>{
    console.log("The server is running at port 3000");
});


