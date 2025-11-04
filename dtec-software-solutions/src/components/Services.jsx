import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ServiceRequestModal from './ServiceRequestModal';
import { FaCode, FaMobileAlt, FaCloud, FaTools, FaBrain, FaPuzzlePiece } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} color="#00B8D9" />,
    title: 'Software Development',
    desc: 'Custom enterprise and government software systems, portals, and management tools designed for scalability and security.',
    image: '/images/software-development.jpg',
    imageAlt: 'AI-assisted software development on laptop',
  },
  {
    title: 'Web & CMS Solutions',
    desc: 'Responsive, multilingual, and SEO-optimized websites powered by leading content management systems.',
    image: '/images/WebCMS Solutions.jpg',
    imageAlt: 'Modern website on monitor with CMS interface',
  },
  {
    icon: <FaPuzzlePiece size={40} color="#00B8D9" />,
    title: 'System Integration',
    desc: 'Streamlining business processes through workflow automation and API-driven integrations across platforms.',
    image: '/images/system-integration.jpg',
    imageAlt: 'Connected systems and integration workflows',
  },
    { icon: <FaBrain size={40} color="#00B8D9" />, title: 'IT Consulting', desc: 'Strategic consulting, infrastructure deployment, and ongoing system maintenance and support services.', image: '/images/it-consulting.jpg', imageAlt: 'IT consultant working in lab' },
    { icon: <FaTools size={40} color="#00B8D9" />, title: 'Enterprise Solutions', desc: 'Tailored ERP, payroll, and MIS platforms for finance, HR, insurance, education, and healthcare sectors.', image: '/images/enterprise-solutions.jpg', imageAlt: 'Enterprise software dashboard' },
    { icon: <FaCloud size={40} color="#00B8D9" />, title: 'Cloud & Hosting', desc: 'Secure hosting, backup, and cloud management services with enterprise-grade reliability and compliance.', image: '/images/cloud.jpg', imageAlt: 'Cloud hosting illustration' },
];

const Services = ({ sample = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeIndex, setActiveIndex] = useState(null); // for tap-to-reveal on touch devices

  const openModal = (title) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  const toggleTile = (idx) => {
    // on touch devices, tap once to reveal overlay, tap again to follow CTA
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="services-page">
      {/* Hero */}
      {!sample && (
        <div className="service-hero-section hero-video-section">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/images/service.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <Container className="hero-content text-center">
            <h1 className="hero-title fw-bold">Our Services & Capabilities</h1>
            <p className="hero-desc">
              We design, build, and optimize digital solutions that drive measurable business results.
            </p>
          </Container>
        </div>
      )}

      {/* Main two-column services area */}
      <div className="services-main container">
        <div className="services-grid">
          <aside className="services-left">
            <div className="services-left-inner">
              <h2 className="services-left-title">
                <span className="line-1">Core Services</span>
                <span className="line-2">&amp; Capabilities</span>
              </h2>
              <div className="vertical-accent" />
            </div>
          </aside>

          <div className="services-right">
            <div className="services-list">
              {services.map((service, idx) => (
                <article
                  className={`service-tile ${activeIndex === idx ? 'active' : ''}`}
                  key={idx}
                  onClick={(e) => {
                    // if click is on the Learn More button, don't toggle the tile
                    if (e.target.closest('button')) return;
                    // handle touch / click reveal
                    toggleTile(idx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleTile(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeIndex === idx}
                >
                  <div className="service-media" aria-hidden aria-label={service.imageAlt || service.title}>
                    {/* show image if provided, otherwise keep gradient background */}
                    <div
                      className={`service-media-bg ${service.image ? 'has-image' : ''}`}
                      style={service.image ? { backgroundImage: `url('${service.image}')` } : undefined}
                      role="img"
                      aria-hidden={!!service.image}
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-overlay">
                      <p className="service-desc">{service.desc}</p>
                      <div className="service-actions">
                        <Button variant="outline-light" onClick={() => openModal(service.title)} className="btn-sm">&rarr; Learn More</Button>
                      </div>
                    </div>
                      <div className="service-head">
                        <h3 className="service-title">{service.title}</h3>
                      </div>
                      <div className="service-overlay">
                        <p className="service-desc">{service.desc}</p>
                        <div className="service-actions">
                          <Button variant="outline-light" onClick={() => openModal(service.title)} className="btn-sm">&rarr; Request Service</Button>
                        </div>
                      </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServiceRequestModal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
};

export default Services;
