import { axiosInstance } from "../config/axiosInstance";

export let fetchAllProducts = async ()=>{
    try {
        console.log("api get fetched..")
        let res = await axiosInstance.get("/products")
        return res.data; 
    } catch (error) {
        console.log("Error-> " , error)
    }
}   



export let getSingleProductDetails = async (id)=>{

    try {
        let product = await axiosInstance.get(`/products/${id}`)
        return product.data;

        
    } catch (error) {
        console.log("error -> " , error);
        
    }
}


