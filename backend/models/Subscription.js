const mongoose = require("mongoose")

const subscriptionSchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  plan:{
    type:String,
    enum:["basic","standard","premium"],
    default:"basic"
  },

  startDate:Date,

  expiryDate:Date

})

module.exports = mongoose.model("Subscription",subscriptionSchema)