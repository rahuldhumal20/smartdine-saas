import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartPage(){

const {cart,increaseQty,decreaseQty,removeItem} = useContext(CartContext)

const total = cart.reduce((sum,item)=> sum + item.price * item.quantity ,0)

return(

<div>

<h2>Your Cart</h2>

<table className="table">

<thead>

<tr>
<th>Item</th>
<th>Price</th>
<th>Qty</th>
<th>Total</th>
<th></th>
</tr>

</thead>

<tbody>

{cart.map(item => (

<tr key={item._id}>

<td>{item.name}</td>

<td>₹{item.price}</td>

<td>

<button
className="btn btn-sm btn-secondary"
onClick={()=>decreaseQty(item._id)}
>
-
</button>

<span className="mx-2">{item.quantity}</span>

<button
className="btn btn-sm btn-secondary"
onClick={()=>increaseQty(item._id)}
>
+
</button>

</td>

<td>
₹{item.price * item.quantity}
</td>

<td>

<button
className="btn btn-danger btn-sm"
onClick={()=>removeItem(item._id)}
>
Remove
</button>

</td>

</tr>

))}

</tbody>

</table>

<h4>Total: ₹{total}</h4>

<button className="btn btn-success">

Place Order

</button>

</div>

)

}

export default CartPage