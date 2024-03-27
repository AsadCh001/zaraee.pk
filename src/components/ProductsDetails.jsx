'use client';
import { useState } from 'react';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
  // Initialize selectedImage with the full path of the first image
  const [selectedImage, setSelectedImage] = useState(`/Products-images/${product.ftimage}`);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, Math.min(10, newQuantity)));
  };

  // Ensure to update the selectedImage with the full path
  const handleImageClick = (img) => {
    setSelectedImage(`/Products-images/${img}`);
  };

  return (
    <div className="container mx-auto my-6 p-4 flex flex-row space-x-4">
      <div className="w-24 flex flex-col space-y-4">
        {/* Display the ftimage as the first thumbnail if it's not included in the images array */}
        {product.ftimage && !product.images.includes(product.ftimage) && (
          <div onClick={() => handleImageClick(product.ftimage)} className="cursor-pointer">
            <Image
              src={`/Products-images/${product.ftimage}`}
              alt={`${product.name} featured`}
              width={100}
              height={100}
              layout="responsive"
              className="object-contain"
            />
          </div>
        )}
        {/* Display other thumbnails */}
        {product.images.map((img, index) => (
          <div key={index} onClick={() => handleImageClick(img)} className="cursor-pointer">
            <Image
              src={`/Products-images/${img}`}
              alt={`${product.name} thumbnail ${index}`}
              width={100}
              height={100}
              layout="responsive"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {/* Main Image */}
        <div className="w-96 h-96 relative">
          <Image
            src={selectedImage}
            alt={product.name}
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* Product Information */}
        <div className="mt-4 space-y-2 ml-10">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-md text-gray-600">Sold by: {product.brand}</p>
          <p className="text-md text-gray-600">Weight: {product.weight}</p>
          <p className="text-md text-gray-600">Composition: {product.composition}</p>
          <p className="text-2xl font-semibold text-green-600">Price: Rs.{product.price}</p>


          <div className="flex items-center my-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="text-xl px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-300"
              disabled={quantity <= 1}
            >
              &ndash;
            </button>
            <span className="text-xl px-4 py-1 border-t border-b border-gray-200">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="text-xl px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-gray-300"
              disabled={quantity >= 10}
            >
              &#43;
            </button>
          </div>

          <p className="text-xl text-gray-600">Total Price: Rs.{quantity * product.price}</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded mt-2 hover:bg-green-600">Add to cart</button>
          <button className="bg-red-500 text-white px-6 py-2 rounded mt-2 ml-2 hover:bg-red-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
