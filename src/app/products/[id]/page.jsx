import ProductDetail from "@/components/ProductsDetails"


const ProductFetchbyID = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getProductsByID?id=${id}`);
    if (response.status == 200) {
     
    
      const data = await response.json(); // Correct way to parse the JSON response
      console.log(data);
      return data
    }
    else{
      console.log("Error")
      return;
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
  }
}


const ProductDetailsFetching = async({params}) => {
  console.log(params.id)

  const product = await ProductFetchbyID(params.id)

  return (
    <div>
      <ProductDetail product={product}/>
    </div>
  );
};

export default ProductDetailsFetching;
