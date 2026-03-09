import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children})=>{

const [cart,setCart] = useState([])

// add item
const addToCart = (item)=>{

const existing = cart.find(i => i._id === item._id)

if(existing){

setCart(cart.map(i =>
i._id === item._id
? {...i, quantity: i.quantity + 1}
: i
))

}else{

setCart([...cart,{...item, quantity:1}])

}

}

// increase quantity
const increaseQty = (id)=>{

setCart(cart.map(item =>
item._id === id
? {...item, quantity: item.quantity + 1}
: item
))

}

// decrease quantity
const decreaseQty = (id)=>{

setCart(cart.map(item =>
item._id === id
? {...item, quantity: item.quantity - 1}
: item
).filter(item => item.quantity > 0))

}

// remove item
const removeItem = (id)=>{

setCart(cart.filter(item => item._id !== id))

}

return(

<CartContext.Provider value={{
cart,
addToCart,
increaseQty,
decreaseQty,
removeItem
}}>

{children}

</CartContext.Provider>

)

}