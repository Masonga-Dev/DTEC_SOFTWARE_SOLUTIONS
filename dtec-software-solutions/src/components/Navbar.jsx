import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const DTECNavbar = () => {
  const location = useLocation();
  
  return (
  <Navbar bg="light" expand="lg" className="shadow-sm py-3">
    <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
        <FaLaptopCode color="#0A3D62" size={28} />
        <span className="fw-bold" style={{ color: '#0A3D62' }}>DTEC Software Solutions</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
          <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Nav.Link>
          <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
          <Button as={Link} to="/contact" variant="info" className="text-white ms-2" style={{ background: '#00B8D9' }}>
            Get a Quote
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default DTECNavbar;
