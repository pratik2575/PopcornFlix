// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchValue, getCharValue } from "store/movie/action";

function NavScrollExample() {
  const dispatch = useDispatch();

  return (
    <Navbar style={{ backgroundColor: "#151334" }} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/homePage" className="fontColor h">
          Popcornflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} className="fontColor h" to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} className="fontColor h" to="/series">
              Series
            </Nav.Link>
          </Nav>
          <Form className="w-25 pe-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 color border-1"
              aria-label="Search"
              onChange={(e) => {
                dispatch(getSearchValue(e.target.value));
                dispatch(getCharValue());
              }}
            />
          </Form>
          <Nav.Link as={Link} className="fontColor h" to="/">
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;
