import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./product";
function ProductDETAILS() {
  const API_URL = 'https://fakestoreapi.com/products';
  const [product, setproduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${API_URL}/${params.productid}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, [params.productid]);
  return (
    <>
      <h3>
       <Product product={product} />
      </h3>
    </>
  );
}
export default ProductDETAILS;
