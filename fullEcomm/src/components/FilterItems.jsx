import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { MyStore } from "../context/MyContext";

const FilterItems = () => {
  const { product, loading} = useContext(MyStore);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  if (loading) return <h1>Loading...</h1>;

  // 🔥 Filtering Logic

  const filteredProducts = product.filter((item) => {
    // search filter
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
 
    // category filter
    let matchCategory = true;

    if (category === "men") {
      matchCategory = item.category.includes("mens");
    } else if (category === "women") {
      matchCategory = item.category.includes("womens");
    }

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-4">
      
      {/* 🔍 Search + Filter */}
      <div className="flex gap-4 mb-4">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search product..."
          className="border p-2 w-full rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      {/* 📦 Product List */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
};

export default FilterItems;