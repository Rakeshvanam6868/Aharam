import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { clearItem } from '../utils/cartSlice'
const Cart = () => {
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearItem());
    }
    const cartItems=useSelector((store)=> store.cart.items)
  return (
    <div className=''>
        <h1 className="" onClick={handleClearCart}>Cart</h1>
        <button className="">clearCart</button>
        <div className="w-6/12 m-auto h-full">
            <ItemList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart