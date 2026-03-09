const express = require("express")
const router = express.Router()

const {
createOrder,
getHotelOrders,
updateOrderStatus
} = require("../controllers/orderController")

router.post("/create",createOrder)

router.get("/hotel/:hotelId",getHotelOrders)

router.put("/status/:id",updateOrderStatus)

module.exports = router