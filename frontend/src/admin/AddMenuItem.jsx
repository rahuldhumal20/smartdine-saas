import { useState, useEffect } from "react"
import axios from "axios"

function AddMenuItem(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [categoryId,setCategoryId] = useState("")
const [image,setImage] = useState("")

const [categories,setCategories] = useState([])

const hotelId = localStorage.getItem("hotelId")

useEffect(()=>{

axios.get(`http://localhost:5000/api/menu/categories/${hotelId}`)
.then(res=>setCategories(res.data))

},[])

const submit = async (e)=>{

e.preventDefault()

await axios.post("http://localhost:5000/api/menu/item",{

name,
price,
categoryId,
image,
hotelId

})

alert("Menu item added")

}

return(

<div className="container">

<h3 className="mb-4">Add Menu Item</h3>

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
value={categoryId}
onChange={(e)=>setCategoryId(e.target.value)}
>

<option>Select Category</option>

{categories.map(cat=>(
<option key={cat._id} value={cat._id}>
{cat.name}
</option>
))}

</select>

<input
className="form-control mb-3"
placeholder="Image URL"
value={image}
onChange={(e)=>setImage(e.target.value)}
/>

<button className="btn btn-success">
Add Item
</button>

</form>

</div>

)

}

export default AddMenuItem