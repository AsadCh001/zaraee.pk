import ProductCarousel from './ProductCarousel';

const productfetch = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getProducts");
    if (res.status !== 200) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error );
    throw error; // Rethrow the error to be handled where this function is called
  }
};

const Section2 = async ({products}) => {
   products = await productfetch();

  return (
    <>
     
    <ProductCarousel products={products}> </ProductCarousel>
          
    </>
  );
};

export default Section2;



// "use client"
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react'; // assuming you're using Swiper
// import 'swiper/css';

// const ProductCarousel = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/getProducts");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       // Add other Swiper parameters as needed
//     >
//       {products.map((product) => (
//         <SwiperSlide key={product.id}>
//           <div>
//             <Image src={`/Products-images/${product.image}`} alt={product.name} width={200} height={200} />
//             <h2>{product.name}</h2>
//             <p>Rating: {/* Render stars based on product.rating */}</p>
//             <p>Rs.{product.price}</p>
//             <button>Add to Cart</button>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ProductCarousel;


