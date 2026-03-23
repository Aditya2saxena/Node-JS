const app=require("./app.js");
require("dotenv").config({
    path:".env.production",
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
    
});