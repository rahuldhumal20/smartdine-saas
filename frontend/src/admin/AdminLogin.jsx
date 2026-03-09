import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AdminLogin(){

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

navigate("/admin")
window.location.reload()

}

return(

<div className="container">

<div className="row justify-content-center">

<div className="col-md-4">

<h3 className="mb-3">Admin Login</h3>

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

<button className="btn btn-dark w-100">
Login
</button>

</form>

</div>

</div>

</div>

)

}

export default AdminLogin