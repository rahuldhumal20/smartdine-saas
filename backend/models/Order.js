const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  tableNumber:Number,

  items:[

    {
      itemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"MenuItem"
      },

      name:String,

      quantity:Number,

      price:Number
    }

  ],

  totalAmount:Number,

  status:{
    type:String,
    enum:["new","accepted","preparing","ready","delivered"],
    default:"new"
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("Order",orderSchema)