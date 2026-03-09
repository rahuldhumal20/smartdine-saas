import { useEffect,useState } from "react"
import axios from "axios"

function MenuList(){

const [items,setItems] = useState([])

const hotelId = localStorage.getItem("hotelId")

useEffect(()=>{

axios.get(`http://localhost:5000/api/menu/items/${hotelId}`)
.then(res=>setItems(res.data))

},[])

return(

<div>

<h2>Menu Items</h2>

<table className="table">

<thead>

<tr>
<th>Name</th>
<th>Price</th>
</tr>

</thead>

<tbody>

{items.map(item=>(

<tr key={item._id}>

<td>{item.name}</td>

<td>₹{item.price}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default MenuList