const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes);

app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports =app;