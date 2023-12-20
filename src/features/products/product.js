import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "./productSlice";

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addProduct(product));
  }
  return (
    <Card className="my-3 p-3 rounded" style={{ height: "500px" }}>
      <Card.Img
        src={product.image}
        alt={product.title}
        variant="top"
        height={300}
      />
      <Card.Body>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text className="text-truncate ">{product.description}</Card.Text>
        <p>price:{product.price}$</p>
        <Link className="btn btn-dark" to={`products/${product.id}`}>
          buy now
        </Link>
        <Button variant="primary" className="ms-2" onClick={handleAddToCart}>
          add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
