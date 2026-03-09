import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SuperAdminLogin(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const login = async (e)=>{

e.preventDefault()

try{

const res = await axios.post("http://localhost:5000/api/auth/login",{

email,
password

})

if(res.data.user.role !== "super_admin"){

alert("Not authorized as Super Admin")
return

}

localStorage.setItem("token",res.data.token)
localStorage.setItem("role",res.data.user.role)

navigate("/superadmin")

}catch(err){

alert("Login failed")

}

}

return(

<div className="container">

<div className="row justify-content-center">

<div className="col-md-4">

<h3 className="mb-4 text-center">
Super Admin Login
</h3>

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

export default SuperAdminLogin