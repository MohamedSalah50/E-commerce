import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;

  return (
    <Card className="my-3 p-3 rounded" style={{ height: "500px" }}>
      <Card.Img
        src={product.image}
        alt={product.title}
        variant="top"
        height={300}
        style={{}}
      />
      <Card.Body>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text className="text-truncate ">{product.description}</Card.Text>
        <p>price:{product.price}$</p>
        <Link className="btn btn-primary" to={`products/${product.id}`}>
          description
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Product;
