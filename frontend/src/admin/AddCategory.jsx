import { useState } from "react"
import axios from "axios"

function AddCategory(){

const [name,setName] = useState("")

const hotelId = localStorage.getItem("hotelId")

const submit = async (e)=>{

  e.preventDefault()

  const hotelId = localStorage.getItem("hotelId")

  await axios.post("http://localhost:5000/api/menu/category",{

    hotelId,
    name

  })

  alert("Category added")
  

}
return(

<div>

<h2>Add Category</h2>

<form onSubmit={submit}>

<input
className="form-control mb-3"
placeholder="Category Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<button className="btn btn-primary">
Add Category
</button>

</form>

</div>

)

}

export default AddCategory