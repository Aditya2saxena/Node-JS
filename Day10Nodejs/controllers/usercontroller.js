const products=require("../Modules/usermodule.js");
exports.getProducts=(req,res)=>{
    res.json(products)
};

exports.getProductsById=(req,res)=>{
    const userId=req.params.id
    products.map(productDetail=>{
        const id=productDetail['id'];
        if(id==userId){
            res.json(productDetail);
        }
    })
};

exports.addProducts = (req, res) => {
    const product = req.body;
    products.push(product);

    res.json({
        message: "Product added",
        products
    });
};

exports.getProducts = (req, res) => {
    res.json(products);
};
exports.deleteProduct=(req,res)=>{
    const{id}=req.params.id;
}