import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAddToCart } from '../hooks/useProductsHooks';

const ProductCard = ({elem , getClickedCard } ) => {

  let navigate = useNavigate()
  let {pathname} = useLocation()
  
  


  return (
    <div className="bg-white border w-[260px] border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3">
      {/* Product Image */}
      <div

      onClick={()=>navigate(`product/${elem.id}`)}


      className="mb-3 w-[100%]  ">
        <img 
          src={elem.image}
          alt="Premium Wireless Headphones"
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
      </div>
      
      {/* Product Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
          {elem.title.length >20 ? `${elem.title.slice(0,19)}`: elem.title}
        </h3>
        
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
          {elem.category}
        </p>
        
        <div className="text-2xl font-black text-emerald-600">
         $ {elem.price}
        </div>
        
        {/* Action Buttons */}

        <div className="flex flex-col sm:flex-row gap-3 ">
          <button 
            className=" bg-gradient-to-r  py-2 px-2 from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-wide"
                
          >
            Remove
          </button>


          {

            pathname === "/cart" ? null : 
            
            <button 
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-wide"
            onClick={()=>useAddToCart(elem.id)}
          >
            Add to Cart
          </button>

          
          }
          


          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
