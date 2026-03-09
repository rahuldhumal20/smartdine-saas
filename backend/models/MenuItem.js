const mongoose = require("mongoose")

const menuItemSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

price:{
type:Number,
required:true
},

categoryId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Category"
},

hotelId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hotel"
},

image:{
type:String,
default:"https://via.placeholder.com/300"
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("MenuItem",menuItemSchema)