const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  itemId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"MenuItem"
  },

  rating:Number,

  comment:String

})

module.exports = mongoose.model("Rating",ratingSchema)