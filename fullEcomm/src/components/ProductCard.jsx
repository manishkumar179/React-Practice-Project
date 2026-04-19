import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product }) => {

  let {addToCart} = useContext(MyStore)

  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg transition duration-300  ">
      
      
      {/* Product Info */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>

        <p className="text-green-600 font-bold mt-2">
          ₹{product.price}
        </p>
      </div>

      {/* Button */}
      <button onClick={()=>addToCart(product)} className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 active:scale-95 ">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;