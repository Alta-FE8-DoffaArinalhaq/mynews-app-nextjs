import { Navbar, Container, Nav } from 'react-bootstrap';
import Router from 'next/router';

const NavBar = () => {
  const homePage = () => {
    Router.push({
      pathname: '/',
    });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbrand">INDIA'S STARTUP</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="home" onClick={() => homePage()}>
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
