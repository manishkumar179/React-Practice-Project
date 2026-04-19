import React, { useContext, useEffect } from 'react'
import axiosInstance from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'
import { MyStore } from '../context/MyContext'
import FilterItems from '../components/FilterItems'

const ProductPage = () => {

  let {product , loading} = useContext(MyStore)
  if(loading) return <h1>Loading..</h1>
  console.log(product);
  

  
  return (
    
    <div className='h-[100vh] overflow-y-scroll ' >

      <FilterItems/>

      <div className="grid grid-cols-3 gap-4 p-4  " >
      {
        product.map((items)=>{
          return <ProductCard key={items.id} product={items}  />
        })
      }

      </div>
    </div>
  )
}

export default ProductPage
