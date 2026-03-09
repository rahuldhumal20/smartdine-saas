import { useEffect, useState } from "react"
import axios from "axios"

function MenuList(){

const [menu,setMenu] = useState({})

const hotelId = localStorage.getItem("hotelId")

useEffect(()=>{

axios.get(`http://localhost:5000/api/menu/items/${hotelId}`)
.then(res=>{

const grouped = {}

res.data.forEach(item => {

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

<h3 className="mb-4">Menu Items</h3>

{Object.keys(menu).map(category => (

<div key={category} className="mb-4">

<h4 className="bg-dark text-white p-2 rounded">
{category}
</h4>

<table className="table table-bordered">

<thead>
<tr>
<th>Name</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{menu[category].map(item => (

<tr key={item._id}>

<td>{item.name}</td>

<td>₹{item.price}</td>

</tr>

))}

</tbody>

</table>

</div>

))}

</div>

)

}

export default MenuList