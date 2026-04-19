import { createContext, useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";

export let MyStore = createContext();

let ContextProvider = ({ children }) => {
  let [product, setProduct] = useState([]);
  let [loading , setLoading] = useState(true)
  let [users , setUsers] = useState([])
  let [regUser , setRegUser] = useState(JSON.parse(localStorage.getItem("regUser")) || [])




  let [cart , setCart] = useState(()=>{
    let storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  let addToCart = (item)=>{
    setCart((prev)=>[...prev , item])

    toast.success("Items added to cart",{
      autoClose:800
    })
  }
  
  let removeFromCart = (id)=>{
    setCart((prev)=>prev.filter((item)=>item.id !== id))
    toast.warning("Items Removed from cart",{
      autoClose:800,
    })
  }

  let fetchProduct = async () => {
    try {
      let res = await axiosInstance.get("/products");
      setProduct(res.data.products);
      setLoading(false)
    } catch (error) {
      console.log("Error -> ", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProduct();
    
  }, []);


  useEffect(()=>{
    localStorage.setItem("cart" , JSON.stringify(cart))
  },[cart])


  return (
    <MyStore.Provider value={{ product,loading,addToCart,removeFromCart ,cart,users,setUsers,regUser,setRegUser}}>
      {children}
    </MyStore.Provider>
  );
};

export { ContextProvider };
