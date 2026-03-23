const express = require("express");

const userRoute = require("./routes/userroute.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

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

module.exports = app;