const express = require("express");
const app = express();

const mdb = require("./models/db"); // path to db.js

// connect database
mdb();

// middleware (optional)
app.use(express.json());
// ✅ import routes
const userRoutes = require("./routes/userRoutes");

// ✅ use routes
app.use("/api", userRoutes);
// simple route
app.get("/users", (req, res) => {
  res.send("Server is running");
});

// server start
app.listen(3000, () => {
  console.log("Server started on port 3000");
});