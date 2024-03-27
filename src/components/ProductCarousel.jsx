'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { useState } from 'react';
import CartModal from '@/components/CartModal'

const ProductCarousel = ({ products }) => {
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!products || products.length === 0) {
    console.error('ProductCarousel was rendered without products.');
    return null; // Or some loading indicator
  }

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setCartModalVisible(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-4xl text-white bg-green-500 hover:bg-green-600 rounded-full p-2`}
        style={{ ...style, display: "block", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
        onClick={onClick}
      >
        &rarr;
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-4xl text-white bg-green-500 hover:bg-green-600 rounded-full p-2`}
        style={{ ...style, display: "block", position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
        onClick={onClick}
      >
        &larr;
      </div>
    );
  }
  

  return (
    <div className="mx-auto max-w-screen-xl px-4 my-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <Link className="block w-full h-full" href={`/products/${product.id}`} passHref>
       
                <Image 
                  src={`/Products-images/${product.ftimage}`} 
                  alt={product.name} 
                  width={200} 
                  height={200} 
                  layout="responsive"
                  className="object-contain cursor-pointer" 
                />

            </Link>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-sm">Rating: {product.rating}</p>
            <p className="text-md font-medium my-1">Rs.{product.price}</p>
            <button  onClick={() => handleAddToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded mt-auto hover:bg-green-600 transition-colors">Add to Cart</button>

            {selectedProduct && (
        <CartModal
          product={selectedProduct}
          isVisible={isCartModalVisible}
          onClose={() => setCartModalVisible(false)}
        />
      )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
