import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandshake, FaLightbulb, FaLeaf, FaUsers } from 'react-icons/fa';

const About = () => (
  <section id="about" style={{ background: '#fff', color: '#0A3D62', padding: '0 0 3rem' }}>
    {/* Hero header */}
    <div style={{
      background: 'linear-gradient(135deg, #08233A 0%, #0A3D62 50%, #00B8D9 100%)',
      color: '#fff'
    }}>
      <Container className="py-5 text-center" style={{ maxWidth: 1000 }}>
        <h1 className="fw-bold mb-3">About DTEC Software Solutions Ltd.</h1>
        <p className="mb-0" style={{ fontSize: '1.05rem' }}>
          we are technology driven company dedicated to building intelligent software systems, Empowering Business to transform, grow, and inovate in the digital world
        </p>
      </Container>
    </div>

    {/* Who we are with image */}
    <Container style={{ paddingTop: '3rem' }}>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img src="/images/about.jpeg" alt="About DTEC" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-2">Who We Are</h2>
          <p>
            DTEC Software Solutions is dedicated to delivering innovative, reliable, and scalable software products and services. Our mission is to empower businesses with technology that drives growth and efficiency.
          </p>
        </Col>
      </Row>

      {/* Mission and Objective */}
      <Row className="mt-4 g-4">
        <Col md={6} sm={12}>
          <h3 className="fw-bold mb-2">Our Mission</h3>
          <p>
            to deliver innovative ,scalable, and secure software solutions that empower organisations to achieve digital excellence through cutting edge technologies and expert craftsmanship.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <h3 className="fw-bold mb-2">Our Vision</h3>
          <p>
            to become aglobal leader in software innovation by creating sustainable and intelligent ecosystem that enhance productivity, collaboration, and growth for business worldwide.
          </p>
        </Col>
      </Row>

      {/* Objectives grid */}
      <h3 className="fw-bold text-center mt-5 mb-4">Our Objectives</h3>
      <Row className="g-4">
        <Col md={6} sm={12}>
          <div className="objective-item">
            <div className="d-flex align-items-start gap-3">
              <FaHandshake size={30} color="#0A3D62" />
              <div>
                <h5 className="fw-bold mb-2">Client-Centric Approach</h5>
                <p className="mb-0">We prioritize client satisfaction by providing customized software solutions that meet their exact needs</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="objective-item">
            <div className="d-flex align-items-start gap-3">
              <FaLightbulb size={30} color="#0A3D62" />
              <div>
                <h5 className="fw-bold mb-2">Innovation & Quality</h5>
                <p className="mb-0"> We continuously adopt emerging technologies to deliver high performance, reliable software systems </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="objective-item">
            <div className="d-flex align-items-start gap-3">
              <FaLeaf size={30} color="#0A3D62" />
              <div>
                <h5 className="fw-bold mb-2">Sustainable Growth</h5>
                <p className="mb-0">At DTEC Software Solutions, we strive for long-term, sustainable growth by continually improving our technologies, expanding our service portfolio, and fostering lasting client relationships. We believe in growth that benefits not only our company but also our partners, clients, and communities.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="objective-item">
            <div className="d-flex align-items-start gap-3">
              <FaUsers size={30} color="#0A3D62" />
              <div>
                <h5 className="fw-bold mb-2">Collaborative Culture</h5>
                <p className="mb-0">We are committed to driving innovation in every project we undertake. Our focus is on developing cutting-edge software solutions that combine creativity, efficiency, and reliability—ensuring the highest standards of quality and performance for our clients worldwide.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
