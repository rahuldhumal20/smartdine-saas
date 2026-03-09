import { useEffect, useState } from "react"
import axios from "axios"

function ViewHotels(){

const [hotels,setHotels] = useState([])

useEffect(()=>{

axios
.get("http://localhost:5000/api/hotels")
.then(res => setHotels(res.data))
.catch(err => console.error(err))

},[])

return(

<div className="container">

<h3 className="mb-4">All Hotels</h3>

<div className="table-responsive">

<table className="table table-bordered">

<thead className="table-dark">

<tr>

<th>Hotel Name</th>
<th>Address</th>
<th>Phone</th>
<th>Plan</th>
<th>Created</th>

</tr>

</thead>

<tbody>

{hotels.map(hotel => (

<tr key={hotel._id}>

<td>{hotel.name}</td>

<td>{hotel.address}</td>

<td>{hotel.phone}</td>

<td>{hotel.plan}</td>

<td>
{new Date(hotel.createdAt).toLocaleDateString()}
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default ViewHotels