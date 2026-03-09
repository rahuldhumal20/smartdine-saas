const Table = require("../models/Table")
const QRCode = require("qrcode")
const mongoose = require("mongoose")

exports.createTables = async (req,res)=>{

try{

const {hotelId,totalTables} = req.body

if(!mongoose.Types.ObjectId.isValid(hotelId)){
   return res.status(400).json({
     message:"Invalid hotelId"
   })
}

const existingTables = await Table.find({hotelId})

if(existingTables.length > 0){
   return res.status(400).json({
     message:"Tables already created for this hotel"
   })
}

let tables = []

for(let i=1;i<=totalTables;i++){

const tableURL = `http://localhost:5173/table/${hotelId}/${i}`

const qrImage = await QRCode.toDataURL(tableURL)

const table = await Table.create({

hotelId,
tableNumber:i,
qrCode:qrImage

})

tables.push(table)

}

res.json({
message:"Tables created successfully",
tables
})

}catch(error){

res.status(500).json({message:error.message})

}

}