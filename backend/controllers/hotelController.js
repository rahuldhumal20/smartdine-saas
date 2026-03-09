const Hotel = require("../models/Hotel")
const User = require("../models/User")
const Subscription = require("../models/Subscription")
const bcrypt = require("bcryptjs")

exports.createHotel = async (req,res)=>{

try{

const {
name,
address,
phone,
plan,
adminName,
adminEmail,
adminPassword
} = req.body

// validation
if(!name || !adminEmail || !adminPassword){
return res.status(400).json({
message:"Required fields missing"
})
}

// check if admin already exists
const existingUser = await User.findOne({email:adminEmail})

if(existingUser){
return res.status(400).json({
message:"Admin email already exists"
})
}

// create hotel
const hotel = await Hotel.create({
name,
address,
phone,
plan
})

// hash password
const hashedPassword = await bcrypt.hash(adminPassword,10)

// create admin user
const admin = await User.create({

name:adminName,
email:adminEmail,
password:hashedPassword,
role:"hotel_admin",
hotelId:hotel._id

})

// create subscription
await Subscription.create({

hotelId:hotel._id,
plan,
startDate:new Date(),
expiryDate:new Date(Date.now()+30*24*60*60*1000)

})

res.status(201).json({
message:"Hotel created successfully",
hotel,
admin
})

}catch(error){

console.log(error)

res.status(500).json({
message:error.message
})

}

}

exports.getHotels = async (req, res) => {

try {

const hotels = await Hotel.find().sort({ createdAt: -1 })

res.json(hotels)

} catch (error) {

console.log(error)

res.status(500).json({
message: error.message
})

}

}