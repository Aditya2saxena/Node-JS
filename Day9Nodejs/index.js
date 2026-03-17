const app=require("./app.js");
require("dotenv").config({
    path:".env.production",
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
    console.log(process.env.PORT);
});