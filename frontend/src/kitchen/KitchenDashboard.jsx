import { useEffect,useState } from "react"
import axios from "axios"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

function KitchenDashboard(){

const [orders,setOrders] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/orders/hotel/HOTEL_ID")
.then(res=>setOrders(res.data))

// listen for new orders
socket.on("newOrder",(order)=>{

setOrders(prev => [order,...prev])

})

},[])

return(

<div>

<h2>Kitchen Orders</h2>

{orders.map(order=>(

<div key={order._id}>

<h3>Table {order.tableNumber}</h3>

{order.items.map(item=>(

<p key={item.name}>
{item.name} x {item.quantity}
</p>

))}

<p>Status: {order.status}</p>

</div>

))}

</div>

)

}

export default KitchenDashboard