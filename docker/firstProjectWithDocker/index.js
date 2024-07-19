const express = require('express');

const app = express();

const PORT = 4400;

app.get("/getData" , (req , res)=>{
    res.send("Hii ...... On Chrom .....");
})
app.listen(PORT,()=>{
    console.log("Server Is Running");
})