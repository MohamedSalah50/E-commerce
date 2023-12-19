import { Button, Col, Row } from "react-bootstrap";
import Product from "../../components/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const API = "https://fakestoreapi.com/products";

function ProductsList() {
  const [Products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const search = useSelector((state) => state.product.search);
  console.log(search);
  const allProducts =
    search !== ""
      ? Products.filter((ele) =>
          `${ele.title} ${ele.description} ${ele.category}`
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
      : Products;

  const getproduct = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
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
        <div className="my-3">
          {categories.length > 0 &&
            categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => getproductincategory(cat)}
                className="btn-dark mx-2"
              >
                {cat}
              </Button>
            ))}
        </div>
        <Row>
          {allProducts.map((product) => {
            return (
              <Col className="col-lg-3 col-md-6 col-sm-12  " key={product.id}>
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
