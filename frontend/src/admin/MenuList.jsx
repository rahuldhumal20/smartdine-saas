import { useEffect, useState } from "react"
import axios from "axios"
import "./menu.css"

function MenuList(){

const [menu,setMenu] = useState({})

const hotelId = localStorage.getItem("hotelId")

useEffect(()=>{

axios.get(`http://localhost:5000/api/menu/items/${hotelId}`)
.then(res=>{

const grouped = {}

res.data.forEach(item=>{

const category = item.categoryId?.name || "Other"

if(!grouped[category]){
grouped[category] = []
}

grouped[category].push(item)

})

setMenu(grouped)

})

},[])

return(

<div className="container">

<h2 className="mb-4">Menu</h2>

{Object.keys(menu).map(category => (

<div key={category} className="mb-5">

<h3 className="category-title">{category}</h3>

<div className="row">

{menu[category].map(item => (

<div className="col-md-3 mb-4" key={item._id}>

<div className="menu-card">

<img
src={item.image}
alt={item.name}
className="menu-img"
/>

<div className="menu-body">

<h5>{item.name}</h5>

<p className="price">
₹{item.price}
</p>

</div>

</div>

</div>

))}

</div>

</div>

))}

</div>

)

}

export default MenuList