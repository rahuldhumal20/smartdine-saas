const express = require("express")
const router = express.Router()

const {
createCategory,
getCategories,
createMenuItem,
getMenuItems
} = require("../controllers/menuController")

router.post("/category",createCategory)
router.get("/categories/:hotelId",getCategories)

router.post("/item",createMenuItem)
router.get("/items/:hotelId",getMenuItems)

module.exports = router