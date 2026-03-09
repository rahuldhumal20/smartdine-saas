const Order = require("../models/Order")

// create order
exports.createOrder = async (req,res)=>{

try{

const {hotelId,tableNumber,items,totalAmount} = req.body

const order = await Order.create({

hotelId,
tableNumber,
items,
totalAmount,
status:"new"

})

// emit real-time event
global.io.emit("newOrder",order)

res.json({
message:"Order placed successfully",
order
})

}catch(error){

res.status(500).json({message:error.message})

}

}

// get orders for kitchen
exports.getHotelOrders = async (req,res)=>{

try{

const {hotelId} = req.params

const orders = await Order.find({hotelId})

res.json(orders)

}catch(error){

res.status(500).json({message:error.message})

}

}

// update order status
exports.updateOrderStatus = async (req,res)=>{

try{

const {id} = req.params
const {status} = req.body

const order = await Order.findByIdAndUpdate(
id,
{status},
{new:true}
)

res.json(order)

}catch(error){

res.status(500).json({message:error.message})

}

}