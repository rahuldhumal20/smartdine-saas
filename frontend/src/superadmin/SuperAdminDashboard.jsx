import { Link } from "react-router-dom"

function SuperAdminDashboard(){

return(

<div>

<h2 className="mb-4">Super Admin Dashboard</h2>

<div className="row g-3">

<div className="col-md-4">

<Link
to="/superadmin/create-hotel"
className="btn btn-primary w-100"
>

Create Hotel

</Link>

</div>

<div className="col-md-4">

<Link
to="/superadmin/hotels"
className="btn btn-dark w-100"
>

View Hotels

</Link>

</div>

</div>

</div>

)

}

export default SuperAdminDashboard