import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartPage = () => {

  const { cart, removeFromCart } = useContext(MyStore);
  if (!Array.isArray(cart)) return <h1>Cart error</h1>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart?.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart?.map((item) => (
          <div
            key={item.id}
            className="border p-3 mb-2 flex justify-between"
          >
            <div>
              <h2>{item.title}</h2>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;