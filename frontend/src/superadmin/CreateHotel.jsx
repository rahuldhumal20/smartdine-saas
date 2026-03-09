import { useState } from "react"
import axios from "axios"

function CreateHotel(){

const [name,setName] = useState("")
const [address,setAddress] = useState("")
const [phone,setPhone] = useState("")
const [plan,setPlan] = useState("standard")

const [adminName,setAdminName] = useState("")
const [adminEmail,setAdminEmail] = useState("")
const [adminPassword,setAdminPassword] = useState("")

const submit = async (e)=>{

e.preventDefault()

try{

await axios.post("http://localhost:5000/api/hotels/create",{

name,
address,
phone,
plan,
adminName,
adminEmail,
adminPassword

})

alert("Hotel created successfully")

}catch(err){

alert(err.response?.data?.message || "Error creating hotel")

}

}

return(

<div className="container">

<h3>Create Hotel</h3>

<form onSubmit={submit}>

<h5>Hotel Info</h5>

<input
className="form-control mb-3"
placeholder="Hotel Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<select
className="form-control mb-3"
value={plan}
onChange={(e)=>setPlan(e.target.value)}
>

<option value="basic">Basic</option>
<option value="standard">Standard</option>
<option value="premium">Premium</option>

</select>

<h5>Admin Info</h5>

<input
className="form-control mb-3"
placeholder="Admin Name"
value={adminName}
onChange={(e)=>setAdminName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Admin Email"
value={adminEmail}
onChange={(e)=>setAdminEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Admin Password"
value={adminPassword}
onChange={(e)=>setAdminPassword(e.target.value)}
/>

<button className="btn btn-success">
Create Hotel
</button>

</form>

</div>

)

}

export default CreateHotel