import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../apis/productApis";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";


export let useGetAllProducts=()=>{
    return useQuery({
        queryKey:["products"],
        queryFn:fetchAllProducts,
        staleTime:100000,
    })
}


export let useAddToCart = (id) => {

    let productsQuery = useGetAllProducts();

    let {cartItems} = useSelector((state)=>state.cart);
    let dispatch = useDispatch();

  const handleAdd = ()=>{  

    if(!productsQuery.data) return;


    let clickedItem = productsQuery.data.find((elem) => elem.id === id);
    let isInCart = cartItems.find((elem)=>elem.id === id);

    if(isInCart){
      alert("product already in cart")
      return
    }

    if (clickedItem) {
      dispatch(addToCart(clickedItem));
      alert("product added to cart")
    }
}
  };

