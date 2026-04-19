import React from 'react'
import { useSelector } from "react-redux";
import ProductCard from '../components/ProductCard';

const CartScreens = () => {
    let {cartItems} = useSelector((state)=>state.cart)

  return (
    <div className='flex flex-wrap gap-5' >
      {cartItems.map((elem)=>{
        return <ProductCard elem={elem} key={elem.id}  />
      })}
    </div>
  )
}

export default CartScreens
