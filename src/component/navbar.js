import { Link } from "react-router-dom";
import { Nav, Container, Navbar, NavbarBrand, NavItem } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <Link to={"/"} className="nav-link">
            LOGO
          </Link>
        </NavbarBrand>
        <Nav className="ms-auto ">
          <NavItem>
            <Link to={"/home"} className="mx-3 nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
