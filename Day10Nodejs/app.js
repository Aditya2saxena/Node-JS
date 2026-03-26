const express = require("express");

const userRoute = require("./routes/userroute.js");
const authRoute = require("./routes/authRoute");
const dotenv = require("dotenv");
const jwt=require("jsonwebtoken");
dotenv.config();

const app = express();


const authMiddleware=(req,res,next)=>{
    const Token=req.headers.authorization?.split(" ")[1];
    if(!Token){
       return res.send("Token not found");
    }

    try{
        decoded=kwt .verify(Token,jwtToken)
        console.log(decoded);
        req.user=decoded;
        next();

    }catch(err){
        res.send("Token is not valid");

    }

}
app.use("/get", authMiddleware, userRoute);

const customMiddleware = (req, res, next) => {
    if (req.query.skip === "true") {
        next();
    } else {
        res.send("Not Authorised");
    }
};

app.use(express.json());
app.use(customMiddleware);

app.use('/get', userRoute);
console.log(userRoute);



app.use("/login", authRoute);

module.exports = app;