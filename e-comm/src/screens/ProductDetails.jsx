import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { getSingleProductDetails } from "../apis/productApis";

const ProductDetails = () => {
  let { id } = useParams();

  let [product, setProduct] = useState({});

  let fetchProductDetails = async () => {
    let res = await getSingleProductDetails(id);
    setProduct(res);
    
    
  };

  
  
  



  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return(
    <div>
        <h1>Product ki details</h1>

      <img width={200} src={product?.image} alt="" />
      <h1>{product?.title}</h1>
      <h1>{product?.description}</h1>
      <h1>{product?.price}</h1>
      <button>Buy Now</button>
    </div>
  )
  
};

export default ProductDetails;
