import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";
function ProductDETAILS() {
  const API_URL = "https://fakestoreapi.com/products";
  const [product, setproduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${params.productID}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, [params.productID]);

  return (
    <>
      <ProductDes product={product} />
    </>
  );
}
function ProductDes({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addProduct(product));
  }
  return (
    <Container className="my-5 rounded shadow p-5">
      <Row>
        <Col xs={12} md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col xs={12} md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{`price : ${product.price}`}</p>
          <p>{`category : ${product.category}`}</p>
          <Button variant="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductDETAILS;
