import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ background: '#0A3D62', color: '#fff', padding: '2rem 0' }}>
    <Container>
      <Row>
        <Col md={4} className="mb-3">
          <h5>DTEC Software Solutions</h5>
          <p>Innovative Software. Reliable Solutions.</p>
        </Col>
        <Col md={4} className="mb-3">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#services" className="text-white">Services</a></li>
            <li><a href="#products" className="text-white">Products</a></li>
            <li><a href="#portfolio" className="text-white">Portfolio</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <h6>Contact</h6>
          <p>Email: Sales@dtec.rw<br />Phone: +25078088777</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white"><FaFacebook size={22} /></a>
            <a href="#" className="text-white"><FaTwitter size={22} /></a>
            <a href="#" className="text-white"><FaLinkedin size={22} /></a>
            <a href="#" className="text-white"><FaGithub size={22} /></a>
          </div>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col className="text-center">
          <small>&copy; 2025 DTEC Software Solutions. All rights reserved.</small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
