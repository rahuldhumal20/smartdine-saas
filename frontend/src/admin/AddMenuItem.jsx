import { useState,useEffect } from "react"
import axios from "axios"

function AddMenuItem(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [categoryId,setCategoryId] = useState("")
const [categories,setCategories] = useState([])

const hotelId = localStorage.getItem("hotelId")

useEffect(()=>{

const hotelId = localStorage.getItem("hotelId")

axios
.get(`http://localhost:5000/api/menu/categories/${hotelId}`)
.then(res => setCategories(res.data))
.catch(err => console.error(err))

},[])

const submit = async (e)=>{

e.preventDefault()

const hotelId = localStorage.getItem("hotelId")

await axios.post("http://localhost:5000/api/menu/item",{

hotelId,
categoryId,
name,
price

})

alert("Item added")

}

return(

<div>

<h2>Add Menu Item</h2>

<form onSubmit={submit}>

<input
className="form-control mb-3"
placeholder="Item Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<select
className="form-control mb-3"
onChange={(e)=>setCategoryId(e.target.value)}
>

<option>Select Category</option>

{categories.map(cat=>(

<option key={cat._id} value={cat._id}>
{cat.name}
</option>

))}

</select>

<button className="btn btn-success">
Add Item
</button>

</form>

</div>

)

}

export default AddMenuItem