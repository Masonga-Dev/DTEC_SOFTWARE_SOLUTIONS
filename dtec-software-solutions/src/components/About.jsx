import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandshake, FaLightbulb, FaLeaf, FaUsers, FaBullseye, FaEye, FaTasks } from 'react-icons/fa';

const About = () => (
  <section id="about" className="about-bg-section" style={{ color: '#0A3D62', padding: '0 0 3rem' }}>
    {/* Hero header: replaced with video hero overlay */}
    <div className="product-hero-section">
      <div className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/images/A.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-overlay" />
        <Container className="hero-content text-center py-5" style={{ maxWidth: 1000 }}>
          <h1 className="hero-title fw-bold">About DTEC Software Solutions Ltd.</h1>
          <p className="hero-desc mb-0" style={{ fontSize: '1.05rem' }}>
            we are technology driven company dedicated to building intelligent software systems, Empowering Business to transform, grow, and inovate in the digital world
          </p>
        </Container>
      </div>
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

      {/* Mission and Vision - use pages-section two-column layout for title + description */}
      <div className="about-mission-vision mb-5 row">
        <div className="col-md-6 mb-4 mb-md-0 about-hover-col">
          <div className="d-flex align-items-start mb-2">
            <span className="about-icon"><FaBullseye size={20} color="#d4145a" /></span>
            <div className="about-title-underline-wrap">
              <h3 className="about-title ms-2">Our Mission</h3>
              <span className="about-underline" />
            </div>
          </div>
          <p className="about-desc">
            To deliver innovative, scalable, and secure software solutions that empower organizations to achieve digital excellence through cutting-edge technologies and expert craftsmanship.
          </p>
        </div>
        <div className="col-md-6 about-hover-col">
          <div className="d-flex align-items-start mb-2">
            <span className="about-icon"><FaEye size={20} color="#d4145a" /></span>
            <div className="about-title-underline-wrap">
              <h3 className="about-title ms-2">Our Vision</h3>
              <span className="about-underline" />
            </div>
          </div>
          <p className="about-desc">
            To become a global leader in software innovation by creating sustainable and intelligent ecosystems that enhance productivity, collaboration, and growth for businesses worldwide.
          </p>
        </div>
      </div>

      {/* Objectives - use pages-section heading then keep objectives grid */}
      <div className="about-objectives mt-5 mb-3">
        <div className="d-flex align-items-center mb-3 about-title-underline-wrap">
          <span className="about-icon"><FaTasks size={20} color="#d4145a" /></span>
          <h3 className="about-title ms-2">Our Objectives</h3>
          <span className="about-underline ms-2" />
        </div>
        <div className="row g-4">
          <div className="col-md-6 about-hover-col">
            <div className="objective-item mb-4">
              <div className="d-flex align-items-start mb-2">
                <span className="about-icon"><FaHandshake size={18} color="#d4145a" /></span>
                <div className="about-title-underline-wrap ms-2">
                  <h5 className="objective-title">Client-Centric Approach</h5>
                  <span className="about-underline" />
                </div>
              </div>
              <p className="objective-sub mb-0">We prioritize client satisfaction by providing customized software solutions that meet their exact needs.</p>
            </div>
          </div>
          <div className="col-md-6 about-hover-col">
            <div className="objective-item mb-4">
              <div className="d-flex align-items-start mb-2">
                <span className="about-icon"><FaLightbulb size={18} color="#d4145a" /></span>
                <div className="about-title-underline-wrap ms-2">
                  <h5 className="objective-title">Innovation & Quality</h5>
                  <span className="about-underline" />
                </div>
              </div>
              <p className="objective-sub mb-0">We continuously adopt emerging technologies to deliver high performance, reliable software systems.</p>
            </div>
          </div>
          <div className="col-md-6 about-hover-col">
            <div className="objective-item mb-4">
              <div className="d-flex align-items-start mb-2">
                <span className="about-icon"><FaLeaf size={18} color="#d4145a" /></span>
                <div className="about-title-underline-wrap ms-2">
                  <h5 className="objective-title">Sustainable Growth</h5>
                  <span className="about-underline" />
                </div>
              </div>
              <p className="objective-sub mb-0">We aim to create long-term, sustainable growth by continuously improving our technologies, expanding our service portfolio, and fostering lasting client relationships.</p>
            </div>
          </div>
          <div className="col-md-6 about-hover-col">
            <div className="objective-item mb-4">
              <div className="d-flex align-items-start mb-2">
                <span className="about-icon"><FaUsers size={18} color="#d4145a" /></span>
                <div className="about-title-underline-wrap ms-2">
                  <h5 className="objective-title">Collaborative Culture</h5>
                  <span className="about-underline" />
                </div>
              </div>
              <p className="objective-sub mb-0">We nurture teamwork, transparency, and innovation, sharing successes to achieve shared outcomes. We focus on developing cutting-edge software solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
