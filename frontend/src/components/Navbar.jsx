import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Navbar(){

const { cart } = useContext(CartContext)

const navigate = useNavigate()

const role = localStorage.getItem("role")

const logout = () => {

localStorage.clear()
navigate("/")
window.location.reload()   // forces navbar update

}

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">
SmartDine
</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav me-auto">

{/* CUSTOMER */}

{!role && (
<li className="nav-item">
<Link className="nav-link" to="/">
Home
</Link>
</li>
)}

{/* ADMIN NAVBAR */}

{role === "hotel_admin" && (

<>
<li className="nav-item">
<Link className="nav-link" to="/admin">
Dashboard
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/admin/add-category">
Add Category
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/admin/add-item">
Add Menu Item
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/admin/menu">
View Menu
</Link>
</li>

</>

)}

{/* SUPER ADMIN */}

{role === "super_admin" && (

<>
<li className="nav-item">
<Link className="nav-link" to="/superadmin">
Dashboard
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/superadmin/create-hotel">
Create Hotel
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/superadmin/hotels">
View Hotels
</Link>
</li>
</>

)}

{/* KITCHEN */}

{role === "kitchen" && (
<li className="nav-item">
<Link className="nav-link" to="/kitchen">
Kitchen Orders
</Link>
</li>
)}

</ul>

<div className="d-flex gap-2">

{/* LOGIN BUTTONS */}

{!role && (

<>
<Link to="/admin-login" className="btn btn-outline-light">
Admin Login
</Link>

<Link to="/superadmin-login" className="btn btn-warning">
Super Admin
</Link>
</>

)}

{/* LOGOUT */}

{role && (

<button
className="btn btn-danger"
onClick={logout}
>

Logout

</button>

)}

{/* CUSTOMER CART */}

{!role && (

<Link to="/cart" className="btn btn-success">
🛒 Cart ({cart.length})
</Link>

)}

</div>

</div>

</div>

</nav>

)

}

export default Navbar