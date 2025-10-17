import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ServiceRequestModal from './ServiceRequestModal';
import { FaCode, FaMobileAlt, FaCloud, FaTools, FaBrain, FaPuzzlePiece } from 'react-icons/fa';

const services = [
  { icon: <FaCode size={32} color="#00B8D9" />, title: 'Software Development', desc: 'Custom software solutions tailored to your business needs.' },
  { icon: <FaMobileAlt size={32} color="#00B8D9" />, title: 'Mobile App Development', desc: 'iOS & Android apps for modern businesses.' },
  { icon: <FaCloud size={32} color="#00B8D9" />, title: 'Cloud Solutions', desc: 'Scalable and secure cloud-based services.' },
  { icon: <FaTools size={32} color="#00B8D9" />, title: 'Maintenance & Support', desc: 'Reliable support and maintenance for your software.' },
  { icon: <FaBrain size={32} color="#00B8D9" />, title: 'AI & Data Solutions', desc: 'Leverage AI and data analytics for smarter decisions.' },
  { icon: <FaPuzzlePiece size={32} color="#00B8D9" />, title: 'System Integration', desc: 'Seamless integration of systems and platforms.' },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (title) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <section id="services" style={{ background: '#f8f9fa', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold text-center mb-5" style={{ color: '#0A3D62' }}>Our Services</h2>
        <Row>
          {services.map((service, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm service-card" style={{ border: 'none', transition: 'transform 0.2s' }}>
                <Card.Body className="text-center">
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold mb-2">{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                  <Button onClick={() => openModal(service.title)} variant="outline-info" style={{ color: '#00B8D9', borderColor: '#00B8D9' }}>
                    Request Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ServiceRequestModal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
};

export default Services;
