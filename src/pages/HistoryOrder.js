import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/products/productSlice";

export default function HistoryOrder() {
  const historyOrders = useSelector((state) => state.product.historyOrders);

  return (
    <>
      <Container>
        {historyOrders.length > 0 ? (
          <>
            <ul>
              <Container className="mt-5 text-center rounded shadow p-3">
                <h3>Total Order : {historyOrders.length}</h3>
                <h3>
                  Total Price : {historyOrders.reduce((a, b) => a + b.price, 0)}
                  $
                </h3>
              </Container>
              {historyOrders.map((item) => (
                <Item item={item} key={crypto.randomUUID()} />
              ))}
            </ul>
          </>
        ) : (
          <h1 className="mt-5 text-center">Add Some Items to Cart 😊</h1>
        )}
      </Container>
    </>
  );
}

function Item({ item }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(removeProduct(id));
  }
  return (
    <li className="list-group-item">
      <Row className="align-items-center my-3 rounded shadow p-3">
        <Col xs={12} md={3}>
          <Image height={"100"} width={"100"} src={item.image} />
        </Col>
        <Col>
          <p>{item.title}</p>
          <p>{item.price}$</p>
          <Button
            className="btn btn-danger"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </li>
  );
}
