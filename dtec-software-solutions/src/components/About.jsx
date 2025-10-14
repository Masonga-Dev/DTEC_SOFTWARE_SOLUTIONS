import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => (
  <section id="about" style={{ background: '#fff', color: '#0A3D62', padding: '4rem 0' }}>
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p>
            DTEC Software Solutions is dedicated to delivering innovative, reliable, and scalable software products and services. Our mission is to empower businesses with technology that drives growth and efficiency.
          </p>
          <Button variant="info" className="text-white mt-3" style={{ background: '#00B8D9' }}>
            Learn More About Us
          </Button>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="About DTEC" className="img-fluid rounded shadow" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
