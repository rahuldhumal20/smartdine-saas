const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  name:{
    type:String,
    required:true
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("Category",categorySchema)