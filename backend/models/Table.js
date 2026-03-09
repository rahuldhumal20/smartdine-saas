const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema({

  hotelId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hotel"
  },

  tableNumber:{
    type:Number,
    required:true
  },

  qrCode:{
    type:String
  },

  status:{
    type:String,
    enum:["available","occupied","reserved"],
    default:"available"
  }

})

module.exports = mongoose.model("Table",tableSchema)