const User=require("../models/userModule");
exports.getUsers=async(req,res)=>{
    const users=await User.find({});
    res.json(users);
}