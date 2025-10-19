import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slideStyles = {
  slide: {
    position: 'relative',
    minHeight: '70vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  bg: (url) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.6)',
  }),
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.70)',
  },
  contentWrap: {
    position: 'relative',
    zIndex: 2,
    paddingTop: '3rem',
    paddingBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
    fontWeight: 700,
  },
  desc: {
    fontSize: '1.1rem',
    maxWidth: 760,
  },
};

const Home = () => (
  <section id="home">
    <Carousel fade interval={4000} pause="hover" touch indicators controls>
      {/* Slide 1: Company Intro */}
      <Carousel.Item>
        <div style={slideStyles.slide}>
          <div style={slideStyles.bg('/images/dtec.webp')} />
          <div style={slideStyles.overlay} />
          <Container style={slideStyles.contentWrap}>
            <h1 className="display-5 display-md-4 fw-bold mb-3" style={slideStyles.title}>
              DTEC SOFTWARE SOLUTIONS LTD
          </h1>
            <p className="mb-4" style={slideStyles.desc}>
              Empowering businesses through innovative software development, maintenance, and digital
              transformation services. We deliver reliable, scalable, and intelligent solutions that
              drive growth and efficiency.
            </p>
            <Button as={Link} to="/about" variant="info" className="text-white me-2" style={{ background: '#00B8D9' }}>
              Discover More
          </Button>
            <Button as={Link} to="/services" variant="outline-light">
            Our Services
          </Button>
          </Container>
        </div>
      </Carousel.Item>

      {/* Slide 2: Custom Software */}
      <Carousel.Item>
        <div style={slideStyles.slide}>
          <div style={slideStyles.bg('/images/app.jpg')} />
          <div style={slideStyles.overlay} />
          <Container style={slideStyles.contentWrap}>
            <h2 className="fw-bold mb-3" style={slideStyles.title}>Custom Software Solutions</h2>
            <p className="mb-4" style={slideStyles.desc}>
              From enterprise systems to web and mobile applications — we design and build software
              that transforms businesses.
            </p>
            <Button as={Link} to="/services" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
              Explore Services
            </Button>
          </Container>
        </div>
      </Carousel.Item>

      {/* Slide 3: Gamma Cloud Migration */}
      <Carousel.Item>
        <div style={slideStyles.slide}>
          <div style={slideStyles.bg('/images/cloud.jpg')} />
          <div style={slideStyles.overlay} />
          <Container style={slideStyles.contentWrap}>
            <h2 className="fw-bold mb-3" style={slideStyles.title}>Cloud Migration for Enterprises</h2>
            <p className="mb-4" style={slideStyles.desc}>
              Transition smoothly to secure, scalable, and cost-effective cloud platforms with DTEC’s
              Gamma Cloud services.
            </p>
            <Button as={Link} to="/products" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
              View Demo
            </Button>
          </Container>
        </div>
      </Carousel.Item>

      {/* Slide 4: Maintenance & Support */}
      <Carousel.Item>
        <div style={slideStyles.slide}>
          <div style={slideStyles.bg('/images/maintenance.jpeg')} />
          <div style={slideStyles.overlay} />
          <Container style={slideStyles.contentWrap}>
            <h2 className="fw-bold mb-3" style={slideStyles.title}>Reliable Maintenance & Support</h2>
            <p className="mb-4" style={slideStyles.desc}>
              Keep your business running without interruption with DTEC’s expert IT maintenance and
              support services.
            </p>
            <Button as={Link} to="/contact" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
              Request Service
            </Button>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
    <Container className="py-5" style={{ maxWidth: 1100 }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2">About Us</h2>
        <p className="mb-4" style={{ fontSize: '1.05rem' }}>
          we are technology driven company dedicated to building intelligent software systems,
          empowering Business to transform, grow, and inovate in the digital world
        </p>
      </div>
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="About DTEC" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold mb-2">Who We Are</h4>
          <p className="mb-3">
            DTEC Software Solutions is dedicated to delivering innovative, reliable, and scalable software products
            and services. Our mission is to empower businesses with technology that drives growth and efficiency.
          </p>
          <Button as={Link} to="/about" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
            Learn More About Us
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Home;
