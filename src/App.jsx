import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <i className="bi bi-cpu me-2"></i>Developer Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="py-5 text-center">
        <Row className="justify-content-center py-5">
          <Col md={8}>
            <h1 className="display-4 fw-bold text-dark">Hello, World!</h1>
            <p className="lead text-muted mb-4">
              Welcome to my brand new React + Vite + Bootstrap development
              workspace.
            </p>
            <Button variant="primary" size="lg" className="px-4 shadow-sm">
              Explore Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
