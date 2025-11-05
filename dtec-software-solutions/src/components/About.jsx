import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandshake, FaLightbulb, FaLeaf, FaUsers, FaBullseye, FaEye, FaTasks } from 'react-icons/fa';
import './ClientShowcase.css';

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

    {/* Who we are with image - full-bleed background */}
  <div className="who-we-are-section full-bleed" style={{ paddingTop: 0 }}>
    <div className="who-inner">
      <Container style={{ paddingTop: '3rem' }}>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img src="/images/about.jpeg" alt="About DTEC" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-2">Who We Are</h2>
            <p className="about-desc">
             D-TEC Software Solutions Ltd is a multinational IT services and
    software development company specializing in designing,
    developing, and deploying customized digital solutions for
    government institutions, corporate enterprises, NGOs, and
    international development organizations across East Africa and
    India. Our agile, client-focused approach combines technical excellence
    with deep regional expertise. We are committed to delivering
    innovative, scalable, and secure technologies that empower
    organizations to achieve digital transformation and operational
    efficiency. With offices strategically located in Kerala (India) and Kigali
    (Rwanda), D-TEC has established itself as a trusted partner for
    modern, value-driven ICT solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
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

      {/* Objectives removed per request - only Mission & Vision kept */}

  {/* Technology Stack - moved here from Contact for dedicated About placement */}
  <div className="tech-stack-section mt-4">
    <div className="tech-stack-inner">
      <h4 className="tech-stack-title">Technology Stack</h4>
      <div className="tech-grid">
        <div className="tech-item"><div className="tech-icon">⚛️</div><div className="tech-label">React</div></div>
        <div className="tech-item"><div className="tech-icon">🅰️</div><div className="tech-label">Angular</div></div>
        <div className="tech-item"><div className="tech-icon">🟩</div><div className="tech-label">Vue.js</div></div>
        <div className="tech-item"><div className="tech-icon">🅽</div><div className="tech-label">Node.js</div></div>
        <div className="tech-item"><div className="tech-icon">☕️</div><div className="tech-label">Java</div></div>
        <div className="tech-item"><div className="tech-icon">🐍</div><div className="tech-label">Python</div></div>
        <div className="tech-item"><div className="tech-icon">🟦</div><div className="tech-label">Laravel</div></div>
        <div className="tech-item"><div className="tech-icon">🐘</div><div className="tech-label">PostgreSQL</div></div>
        <div className="tech-item"><div className="tech-icon">🟠</div><div className="tech-label">MySQL</div></div>
        <div className="tech-item"><div className="tech-icon">🍃</div><div className="tech-label">MongoDB</div></div>
        <div className="tech-item"><div className="tech-icon">☁️</div><div className="tech-label">AWS</div></div>
        <div className="tech-item"><div className="tech-icon">🔷</div><div className="tech-label">Azure</div></div>
        <div className="tech-item"><div className="tech-icon">🐬</div><div className="tech-label">DigitalOcean</div></div>
        <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">Flutter</div></div>
        <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">React Native</div></div>
        <div className="tech-item"><div className="tech-icon">🐳</div><div className="tech-label">Docker</div></div>
      </div>

      {/* Tech cards: polished layout (no icons) */}
      <div className="tech-card-grid" role="list">
        <div className="tech-card" role="listitem">
          <div className="tech-card-title">Backend</div>
          <ul className="tech-card-list">
            <li>Node.js</li>
            <li>Python</li>
            <li>Laravel</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="tech-card" role="listitem">
          <div className="tech-card-title">Frontend</div>
          <ul className="tech-card-list">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>
        <div className="tech-card" role="listitem">
          <div className="tech-card-title">Mobile App</div>
          <ul className="tech-card-list">
            <li>Flutter</li>
            <li>React Native</li>
            <li>Kotlin</li>
            <li>Swift</li>
          </ul>
        </div>
        <div className="tech-card" role="listitem">
          <div className="tech-card-title">Database</div>
          <ul className="tech-card-list">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>MS SQL Server</li>
          </ul>
        </div>
        <div className="tech-card" role="listitem">
          <div className="tech-card-title">Cloud</div>
          <ul className="tech-card-list">
            <li>AWS</li>
            <li>Azure</li>
            <li>Google Cloud</li>
            <li>DigitalOcean</li>
          </ul>
        </div>
      </div>

      </div>

      {/* Client Showcase Section */}
      <div className="client-showcase-section mt-5">
        <h4 className="client-showcase-title">Our Clients</h4>
        <div className="client-carousel">
          <div className="client-card government">
            <img src="/images/rra.png" alt="RRA" className="client-logo" />
            <h5 className="client-title">Rwanda Revenue Authority</h5>
            <p className="client-subtitle">Services and Solutions for Government</p>
          </div>
          <div className="client-card corporate">
            <img src="/images/bki.png" alt="BK Insurance" className="client-logo" />
            <h5 className="client-title">BK Insurance</h5>
            <p className="client-subtitle">Financial Technology Solutions</p>
          </div>
          <div className="client-card ngo">
            <img src="/images/plan-international.png" alt="Plan International" className="client-logo" />
            <h5 className="client-title">Plan International</h5>
            <p className="client-subtitle">NGO Digital Transformation</p>
          </div>
          <div className="client-card government">
            <img src="/images/gov.png" alt="Supreme Court of Rwanda" className="client-logo" />
            <h5 className="client-title">Supreme Court of Rwanda</h5>
            <p className="client-subtitle">Judicial System Solutions</p>
          </div>
          <div className="client-card government">
            <img src="/images/NLA.png" alt="National Land Authority" className="client-logo" />
            <h5 className="client-title">National Land Authority</h5>
            <p className="client-subtitle">Land Management Systems</p>
          </div>
          <div className="client-card healthcare">
            <img src="/images/Healthcare.jpg" alt="Healthcare Sector" className="client-logo" />
            <h5 className="client-title">Healthcare Sector</h5>
            <p className="client-subtitle">Health Management System and Hospital IT systems deployment and maintenance
</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    );  export default About;
