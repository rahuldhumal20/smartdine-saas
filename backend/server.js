const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const hotelRoutes = require("./routes/hotelRoutes")
const tableRoutes = require("./routes/tableRoutes")
const menuRoutes = require("./routes/menuRoutes")
const orderRoutes = require("./routes/orderRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/hotels",hotelRoutes)
app.use("/api/tables",tableRoutes)
app.use("/api/menu",menuRoutes)
app.use("/api/orders",orderRoutes)

const server = http.createServer(app)

const io = new Server(server,{
cors:{
origin:"*"
}
})

global.io = io

io.on("connection",(socket)=>{

console.log("Client connected")

socket.on("disconnect",()=>{
console.log("Client disconnected")
})

})

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{
console.log(`Server running on ${PORT}`)
})