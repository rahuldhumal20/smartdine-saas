const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

  name: String,

  email: {
    type: String,
    unique: true
  },

  password: String,

  role: {
    type: String,
    enum: ["super_admin", "hotel_admin", "kitchen"]
  },

  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel"
  }

})

module.exports = mongoose.model("User", userSchema)