const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller.js");

router.get("/", (req, res) => {   
    res.send("User route working");
});




router.get("/product", userController.getProducts);

router.get("/product/:id", userController.getProductsById);

router.post("/product/addProduct", userController.addProducts);




module.exports = router;




// get /get/products
// get /get/product/:id
// post /add/products
// delete /get/products/:id