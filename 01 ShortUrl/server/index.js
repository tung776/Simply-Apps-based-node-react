import express from "express";
const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP || localhost;

app.get('/', (req, res, next)=> {
    res.send("hello world");
})



app.listen(port, ip, (err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("server is running");
    }
})