import Product from "./product";
import { useEffect, useState } from "react";

function ProductsList() {
const API='https://fakestoreapi.com/products';
const [Products, setproducts] = useState([]);
const [categories,setCategories]=useState({});

const getproduct=async()=>{
    await fetch(API)
    .then((res) => res.json())
    .then((data) => setproducts(data));
  }

  const getcategories=async()=>{
    await fetch(`${API}/categories`)
    .then((res) => res.json())
    .then((data) => setCategories(data));
  }
  const getproductincategory=async({catName})=>{
    await fetch(`${API}/category/${catName}`)
    .then((res)=>res.json())
    .then((data)=>setproducts(data));
  }

  useEffect(() => {
    getproduct();
    getcategories();
  }, []);

  return (
    <>
      <h2 className="text-center m-3">our products</h2>
      <div className="container">
       {/*categories.map((cat)=>{
          return <button className="btn btn-info" onclick={()=>{
          getproductincategory(cat);
          }} key={cat}>{cat}</button>})
        */}
        <div className="row">
          {Products.map((product) => {
            return (
              <div className="col-3" key={Product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
