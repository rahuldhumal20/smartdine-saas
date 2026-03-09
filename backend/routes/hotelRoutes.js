const express = require("express")
const router = express.Router()

const {createHotel, getHotels} = require("../controllers/hotelController")

router.post("/create",createHotel)
router.get("/",getHotels)

module.exports = router