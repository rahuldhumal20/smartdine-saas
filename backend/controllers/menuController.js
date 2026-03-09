const Category = require("../models/Category")
const MenuItem = require("../models/MenuItem")

// create category
exports.createCategory = async (req,res)=>{

try{

const {hotelId,name} = req.body

const category = await Category.create({
hotelId,
name
})

res.json(category)

}catch(error){

res.status(500).json({message:error.message})

}

}

// get categories
exports.getCategories = async (req,res)=>{

try{

const {hotelId} = req.params

const categories = await Category.find({hotelId})

res.json(categories)

}catch(error){

res.status(500).json({message:error.message})

}

}

// add menu item
exports.createMenuItem = async (req,res)=>{

try{

const item = await MenuItem.create(req.body)

res.json(item)

}catch(error){

res.status(500).json({message:error.message})

}

}

// get menu items
exports.getMenuItems = async (req,res)=>{

try{

const {hotelId} = req.params

const items = await MenuItem.find({hotelId}).populate("categoryId")

res.json(items)

}catch(error){

res.status(500).json({message:error.message})

}

}