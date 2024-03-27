"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ViewCart = () => {
  const [updatedCartItems, setUpdatedCartItems] = useState([]);
// Fetch cart items from localStorage on component mount

useEffect(() => {
  // Fetch cart items from localStorage on component mount
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (!storedCartItems || storedCartItems.length === 0) {
    console.log("Empty cart items");
    return;
  }

  // Set cart items in the state
  setUpdatedCartItems(storedCartItems);
  console.log("asad1:", storedCartItems);

  // Clear the 'cartItems' key in localStorage after setting items in the state
  localStorage.removeItem('cartItems');
}, []);

const updateQuantity = (id, newQuantity) => {
  const updatedItems = updatedCartItems.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity, total_price: item.product.price * newQuantity } : item
  );
  setUpdatedCartItems(updatedItems);
};

  const removeItem = (id) => {
    const updatedItems = updatedCartItems.filter((item) => item.id !== id);
    setUpdatedCartItems(updatedItems);
  };

  const getTotalQuantity = () => {
    return updatedCartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return updatedCartItems.reduce((total, item) => total + item.total_price, 0);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checking out...');
  };

  return (
 <>
    <h2 className="text-2xl pt-4 pl-4 font-bold">Shopping Cart</h2>
<div className='p-6 flex flex-wrap'>


  <div className="border p-4 rounded-md">

    {/* Display Cart Items */}
    {updatedCartItems.map((item) => (
      <div key={item.id} className="flex items-center mb-4">
        <div className="w-16 h-16 relative mr-4">
          <Image
            src={`/Products-images/${item.product.ftimage}`}
            alt={`${item.product.name} thumbnail`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{item.product.name}</p>
          <p className="text-sm">Quantity: {item.quantity}</p>
          <p className="text-sm">Total Price: Rs.{item.total_price.toFixed(2)}</p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              className="border p-1 text-sm w-16"
            />
            <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm">
              Remove
            </button>
          </div>
        </div>
      </div>
    ))}


</div>
    
        {/* Display Summary and Checkout */}
        <div className="flex flex-col items-start ml-4">
  {updatedCartItems.length > 0 && (
    <div className="mt-4 border p-4 rounded-md w-72 bg-white shadow-md">
      <p className="text-xl font-bold mb-2">Summary:</p>
      <p className="text-sm font-bold">Total Quantity: {getTotalQuantity()}</p>
      <p className="text-sm font-bold">Total Price: Rs.{getTotalPrice().toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition duration-200 ease-in-out"
      >
        Checkout
      </button>
    </div>
  )}
</div>

  {updatedCartItems.length === 0 && <p>Your cart is empty.</p>}
  </div>

</>
  );
  
};

export default ViewCart;
