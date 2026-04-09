const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  college: String,
  isactive: Boolean,
  status: String,

  skills: [String],
  address: {
    city: String,
    pincode: Number
  },
  marks: [
    {
      subject: String,
      score: Number
    }
  ],

});
const User=mongoose.model("User", userSchema,);
module.exports =User;