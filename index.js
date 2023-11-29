const express =require("express");
const cors=require("cors");
const PORT=3000;
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send({
        data:employees,
        message:"success"
    })

    
})
app.post("/login",(req,res)=>{
    console.log({body:req.body});
    const {email,password}=req.body;
    const rightEmail="admin@admin.com";
    const rightPassword="12345";
    if (email===rightEmail){if(password===rightPassword){
   res.send(
        {
            message:"Login Success!!!",
            user:{
                name:"Abdullah",
                role:"Admin",
                employee_code:3214
            }
        })
    
     
}else{
        res.status(401).send({
            message:"Wrong Password"
        })
    }

} else {
    res.status(401).send({
        message:"Account does not Exist"
    })
}

})  
    


app.listen (PORT,()=>{
    console.log("The server is running at port 3000");
})


