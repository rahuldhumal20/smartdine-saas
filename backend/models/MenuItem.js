const mongoose = require("mongoose")

const menuItemSchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
  },

  name:{
    type:String,
    required:true
  },

  description:String,

  price:{
    type:Number,
    required:true
  },

  image:String,

  isVeg:{
    type:Boolean,
    default:true
  },

  available:{
    type:Boolean,
    default:true
  },

  rating:{
    type:Number,
    default:0
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("MenuItem",menuItemSchema)