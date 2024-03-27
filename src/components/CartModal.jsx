'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getSession } from 'next-auth/react';

const CartModal = ({ product, isVisible, onClose }) => {
    // Initialize selectedImage with the full path of the first image
    const [selectedImage, setSelectedImage] = useState(`/Products-images/${product.ftimage}`);
    const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState(null);

    const onAddToCart = async (product, quantity, totalPrice) => {
      try {
        const session = await getSession();

        // Check if the user is authenticated
        if (!session?.user?.email) {
          console.error("User not authenticated");
          // You might want to redirect the user to the login page
          return;
        }
  
        const sessionEmail = session.user.email;
        console.log(sessionEmail)
        console.log(product.id)
        console.log(totalPrice)
        console.log(quantity)
        
        // Make a POST request to the /api/cart endpoint
        const response = await fetch("/api/cart", {
          method: "POST",
          body: JSON.stringify({
            productId: product.id,
            total_price: totalPrice,
            quantity: quantity,
            sessionEmail: sessionEmail,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Handle the response as needed
        if (response.ok) {
          console.log("Product added to cart successfully");
          setSuccessMessage("Product added to cart successfully");
          // Optionally, close the modal after a delay
          setTimeout(() => {
            onClose();
            setSuccessMessage(null);
          }, 2000); // Adjust the delay as needed
          window.location.reload();
        } else {
          console.error("Failed to add product to cart");
        }
      } catch (error) {
        console.error("An error occurred while adding product to cart", error);
      }
    };
    
    useEffect(() => {
        // Reset selectedImage and quantity every time the product changes
        setSelectedImage(`/Products-images/${product.ftimage}`);
        setQuantity(1);
      }, [product]);

    const handleImageClick = (img) => {
      setSelectedImage(`/Products-images/${img}`);
    };
  
    const totalPrice = quantity * product.price;
  
    // Reset states when closing the modal
    const handleClose = () => {
      onClose();
    };
  
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
        <div className="relative mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white flex">
          {/* Thumbnails */}
          <div className="w-1/6 flex flex-col space-y-2 overflow-y-auto">
            {[product.ftimage, ...product.images].map((img, index) => (
              <div key={index} className="w-full h-24 relative cursor-pointer">
                <Image
                  src={`/Products-images/${img}`}
                  alt={`${product.name} thumbnail ${index}`}
                  layout="fill"
                  objectFit="contain"
                  onClick={() => handleImageClick(img)}
                />
              </div>
            ))}
          </div>
  
          {/* Featured Image */}
          <div className="w-1/3 h-auto relative mx-2">
            <Image
              src={selectedImage}
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
  
          {/* Product Details */}
          <div className="flex flex-col w-1/2 ml-2">
            <button
              onClick={handleClose}
              className="ml-auto bg-transparent text-black font-semibold leading-none p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              &#10005; {/* Close Icon */}
            </button>

          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="mb-1">Sold by: {product.brand}</p>
          <p className="mb-1">Weight: {product.weight}</p>
          <p className="mb-1">Composition: {product.composition}</p>
          <p className="text-2xl font-semibold text-green-600 mb-2">Rs.{product.price}</p>
          <div className="flex items-center mb-2">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-lg px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span className="text-lg px-4 mx-2">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="text-lg px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>
          <p className="text-lg mb-2">Total Price: Rs.{totalPrice.toFixed(2)}</p>
          <button onClick={() => onAddToCart(product, quantity, totalPrice)} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200 ease-in-out">Add to cart</button>
          {successMessage && (
            <div className="text-green-600 mt-2">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
