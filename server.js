const express = require("express");
const connectDB = require("./config/db_config");
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8000;

connectDB();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.json({msg:"welcome to blog api"})
})


app.use("/api/blog", require("./routes/blogRoutes"))

app.listen(PORT, ()=>{
    console.log(`server is running at PORT : ${PORT}`)
})