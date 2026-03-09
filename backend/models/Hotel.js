const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

address:String,

phone:String,

plan:{
type:String,
enum:["basic","standard","premium"],
default:"basic"
},

planExpiry:Date,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Hotel",hotelSchema)