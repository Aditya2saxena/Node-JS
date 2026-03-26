const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtToken = process.env.JWT_TOKEN;

exports.generateToken = (req, res) => {
    const { username, email } = req.query;

    const token = jwt.sign({ username, email }, jwtToken);

    res.json({ token });
};