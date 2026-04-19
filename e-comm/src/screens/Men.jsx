import React from "react";  
import ProductCard from "../components/ProductCard";


import { useDispatch } from "react-redux";
import { useGetAllProducts } from "../hooks/useProductsHooks";


const Men = () => {


  // let product = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  //     title: "Sony WH-1000XM5 Wireless Headphones",
  //     category: "Electronics",
  //     price: 299.99,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
  //     title: "Apple AirPods Pro 2nd Generation",
  //     category: "Electronics",
  //     price: 249.99,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=400&h=400&fit=crop",
  //     title: "iPhone 15 Pro Max 256GB",
  //     category: "Smartphones",
  //     price: 1199.99,
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=400&fit=crop",
  //     title: "MacBook Air M2 13-inch",
  //     category: "Laptops",
  //     price: 999.99,
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://images.unsplash.com/photo-1607936854279-b2ce8a55b4d0?w=400&h=400&fit=crop",
  //     title: "Nike Air Max 270 React",
  //     category: "Footwear",
  //     price: 149.99,
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
  //     title: "Adidas Ultraboost 22 Running Shoes",
  //     category: "Footwear",
  //     price: 189.99,
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  //     title: "Samsung Galaxy Watch 6 Classic",
  //     category: "Wearables",
  //     price: 329.99,
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://images.unsplash.com/photo-1610945262588-8f9f1d34cf9b?w=400&h=400&fit=crop",
  //     title: "Apple Watch Series 9 45mm",
  //     category: "Wearables",
  //     price: 429.99,
  //   },
  //   {
  //     id: 9,
  //     image:
  //       "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
  //     title: "Canon EOS R6 Mirrorless Camera",
  //     category: "Cameras",
  //     price: 2499.99,
  //   },
  //   {
  //     id: 10,
  //     image:
  //       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  //     title: "Coffee Maker Espresso Machine",
  //     category: "Home Appliances",
  //     price: 199.99,
  //   },
  //   {
  //     id: 11,
  //     image:
  //       "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=400&fit=crop",
  //     title: "Leather Messenger Laptop Bag",
  //     category: "Bags",
  //     price: 129.99,
  //   },
  //   {
  //     id: 12,
  //     image:
  //       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  //     title: "Ray-Ban Wayfarer Sunglasses",
  //     category: "Eyewear",
  //     price: 159.99,
  //   },
  //   {
  //     id: 13,
  //     image:
  //       "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop",
  //     title: "Wireless Gaming Mouse RGB",
  //     category: "Electronics",
  //     price: 79.99,
  //   },
  //   {
  //     id: 14,
  //     image:
  //       "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
  //     title: "Mechanical Gaming Keyboard",
  //     category: "Electronics",
  //     price: 149.99,
  //   },
  //   {
  //     id: 15,
  //     image:
  //       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  //     title: "Cotton T-Shirt Unisex",
  //     category: "Clothing",
  //     price: 29.99,
  //   },
  //   {
  //     id: 16,
  //     image:
  //       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  //     title: "Denim Jeans Slim Fit",
  //     category: "Clothing",
  //     price: 89.99,
  //   },
  //   {
  //     id: 17,
  //     image:
  //       "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop",
  //     title: "Running Sports Backpack",
  //     category: "Bags",
  //     price: 69.99,
  //   },
  //   {
  //     id: 18,
  //     image:
  //       "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
  //     title: "Bluetooth Speaker Portable",
  //     category: "Electronics",
  //     price: 99.99,
  //   },
  //   {
  //     id: 19,
  //     image:
  //       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
  //     title: "Yoga Mat Non-Slip 6mm",
  //     category: "Fitness",
  //     price: 39.99,
  //   },
  //   {
  //     id: 20,
  //     image:
  //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
  //     title: "Wireless Earbuds Sports",
  //     category: "Electronics",
  //     price: 89.99,
  //   },
  // ];

 let {isPending , data , error} = useGetAllProducts();

  if (isPending) return <h1 className="text-2xl">Loading data...</h1>;

  
  return (
    <div className="flex flex-wrap  gap-10  ">

      {data?.map((elem) => {
        return <ProductCard

        key={elem.id}
        elem={elem}
        
        
        
        />;


      })}
    </div>
  );
};

export default Men;
