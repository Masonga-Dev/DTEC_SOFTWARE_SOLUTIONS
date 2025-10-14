import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

const DTECNavbar = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm py-3">
    <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
        <FaLaptopCode color="#0A3D62" size={28} />
        <span className="fw-bold" style={{ color: '#0A3D62' }}>DTEC Software Solutions</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button variant="info" className="text-white ms-2" style={{ background: '#00B8D9' }}>
            Get a Quote
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default DTECNavbar;
