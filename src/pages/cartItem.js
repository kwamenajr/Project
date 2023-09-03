import React from 'react'
import { cartItems } from '../components/Products'
import { menuItems } from '../components/MenuCompo'

const CartItem = () => {
  const cartitems = cartItems
  const menuitems = menuItems
  return (
    <div>
      {cartitems.map(item => (
        <div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
      {menuitems.map(item => (
        <div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
    )
  
}

export default CartItem