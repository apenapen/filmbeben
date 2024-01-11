import { Navbar, Container, Nav } from "react-bootstrap";

const navigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">afenfilm</Navbar.Brand>
          <Nav>
            <Nav.Link href="#superhero "> SUPERHERO </Nav.Link>
            <Nav.Link href="#trending"> TRENDING </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigationBar;
