import { Button, Col, Row } from "react-bootstrap";
import Product from "./product";
import { useEffect, useState } from "react";

const API = "https://fakestoreapi.com/products";

function ProductsList() {
  const [Products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getproduct = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };

  const getcategories = async () => {
    await fetch(`${API}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const getproductincategory = async (catName) => {
    await fetch(`${API}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  };

  useEffect(() => {
    getproduct();
    getcategories();
  }, []);

  return (
    <>
      <h2 className="text-center display-5 m-5">Our Products</h2>
      <div className="container">
       {/*categories.map((cat)=>{
          return <button className="btn btn-info" onclick={()=>{
          getproductincategory(cat);
          }} key={cat}>{cat}</button>})
        */}
        <div className="row">
          {Products.map((product) => {
            return (
              <Col className="col-3" key={product.id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
export default ProductsList;
