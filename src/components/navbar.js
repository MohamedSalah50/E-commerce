import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../features/accounts/accountSlice";
import SearchBar from "../features/products/SearchBar";

function NavBar() {
  const dispatch = useDispatch();

  const cartSize = useSelector((state) => state.product.cartSize);
  const user = useSelector((state) => state.account.userName);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Navbar className="border-bottom border-3 shadow">
      <Container>
        <NavbarBrand>
          <Link to={"/"} className="nav-link">
            React Store
          </Link>
        </NavbarBrand>
        <Nav className="d-flex justify-content-between align-items-center">
          <NavItem className="me-2">
            <p className="m-0 text-capitalize fs-5">welcome {user}👋</p>
          </NavItem>
          <NavItem>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </NavItem>
          <NavItem className="m-2">
            <Link
              to={"/history"}
              className=" d-flex align-items-center nav-link  text-decoration-none"
            >
              <FaShoppingCart size={20} />
              &nbsp;{cartSize} cart
            </Link>
          </NavItem>
          <NavItem className="me-2">
            <SearchBar />
          </NavItem>

          <NavItem>
            <Button className="btn-dark " onClick={handleLogout}>
              Logout
            </Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
