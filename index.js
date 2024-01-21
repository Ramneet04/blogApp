const express = require("express");
const app = express();
const blogRoutes = require("./routes/blog")
const dbConnect = require("./config/database");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", blogRoutes)

app.get("/",(req,res)=>{
    res.send("<h1>RAMNEET BLOGS !!!</h1>")
})
app.listen(PORT, ()=>{
    console.log("running");
})

dbConnect();