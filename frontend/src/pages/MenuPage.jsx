import { useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { CartContext } from "../context/CartContext"

function MenuPage(){

const { hotelId, tableNumber } = useParams()

const [menu,setMenu] = useState([])
const [categories,setCategories] = useState([])
const [selectedCategory,setSelectedCategory] = useState("all")

const { addToCart, cart } = useContext(CartContext)

useEffect(()=>{

axios.get(`http://localhost:5000/api/menu/items/${hotelId}`)
.then(res=>setMenu(res.data))

axios.get(`http://localhost:5000/api/menu/categories/${hotelId}`)
.then(res=>setCategories(res.data))

},[hotelId])

const filteredMenu = selectedCategory === "all"
? menu
: menu.filter(item => item.categoryId?._id === selectedCategory)

return(

<div>

<h4 className="text-center mb-3">
Table {tableNumber}
</h4>

{/* Category Buttons */}

<div className="d-flex overflow-auto mb-4">

<button
className={`btn me-2 ${selectedCategory==="all" ? "btn-dark":"btn-outline-dark"}`}
onClick={()=>setSelectedCategory("all")}
>
All
</button>

{categories.map(cat =>(

<button
key={cat._id}
className={`btn me-2 ${selectedCategory===cat._id ? "btn-dark":"btn-outline-dark"}`}
onClick={()=>setSelectedCategory(cat._id)}
>
{cat.name}
</button>

))}

</div>


{/* Menu Items */}

<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

{filteredMenu.map(item =>(

<div className="col" key={item._id}>

<div className="card shadow h-100">

<img
src={item.image || "https://via.placeholder.com/300"}
className="card-img-top"
alt={item.name}
/>

<div className="card-body d-flex flex-column">

<h5>{item.name}</h5>

<p className="text-muted">
₹{item.price}
</p>

<button
className="btn btn-primary mt-auto"
onClick={()=>addToCart(item)}
>
Add to Cart
</button>

</div>

</div>

</div>

))}

</div>


{/* Floating Cart Button */}

<div
style={{
position:"fixed",
bottom:"20px",
right:"20px",
zIndex:1000
}}
>

<Link to="/cart" className="btn btn-warning shadow">

🛒 Cart ({cart.length})

</Link>

</div>

</div>

)

}

export default MenuPage