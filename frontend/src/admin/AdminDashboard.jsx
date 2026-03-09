import { Link } from "react-router-dom"

function AdminDashboard(){

return(

<div>

<h2>Admin Dashboard</h2>

<div className="d-grid gap-3">

<Link to="/admin/add-category" className="btn btn-primary">
Add Category
</Link>

<Link to="/admin/add-item" className="btn btn-success">
Add Menu Item
</Link>

<Link to="/admin/menu" className="btn btn-dark">
View Menu
</Link>

</div>

</div>

)

}

export default AdminDashboard