const express = require("express")
const router = express.Router()

const {createTables} = require("../controllers/tableController")

router.post("/create",createTables)

module.exports = router