import express from "express";

const app = express()

app.get("/", (req,res)=>{
res.status(200).send("Hello World")
})


app.listen(9000, ()=> console.log("Server is running on port on 9000"));