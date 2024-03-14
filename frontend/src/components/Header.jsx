import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="py-1 px-4"
      >
        <LinkContainer to="/">
          <Navbar.Brand className="fs-2 fw-bold">
            <img
              src={logo}
              alt="ProShop"
            />
            PROSHOP
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="">
                <FaShoppingCart />
                Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link className="">
                <FaUser />
                Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
