import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function KitchenLogin(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const login = async (e)=>{

e.preventDefault()

const res = await axios.post("http://localhost:5000/api/auth/login",{

email,
password

})

localStorage.setItem("token",res.data.token)
localStorage.setItem("role",res.data.user.role)
localStorage.setItem("hotelId",res.data.user.hotelId)

navigate("/kitchen")

}

return(

<div className="container">

<h3>Kitchen Login</h3>

<form onSubmit={login}>

<input
className="form-control mb-3"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn btn-dark">
Login
</button>

</form>

</div>

)

}

export default KitchenLogin