import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => (
  <section id="home" style={{ background: 'linear-gradient(90deg, #0A3D62 60%, #00B8D9 100%)', color: '#fff', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
    <Container>
      <Row className="align-items-center">
        <Col md={7}>
          <h1 className="fw-bold mb-3" style={{ fontFamily: 'Poppins, Montserrat, Arial, sans-serif' }}>
            Empowering Businesses Through Innovative Software Solutions
          </h1>
          <p className="mb-4" style={{ fontSize: '1.2rem' }}>
            We design, build, and maintain cutting-edge software to help your business thrive.
          </p>
          <Button variant="info" className="me-2 text-white" style={{ background: '#00B8D9' }}>
            Get Started <FaArrowRight className="ms-1" />
          </Button>
          <Button variant="outline-light">
            Our Services
          </Button>
        </Col>
        <Col md={5} className="d-none d-md-block">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Team working" className="img-fluid rounded shadow" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
