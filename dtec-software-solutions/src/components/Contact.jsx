import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const officeCardStyle = {
  background: '#fff',
  color: '#0A3D62',
  borderRadius: '1rem',
  boxShadow: '0 2px 16px rgba(10,61,98,0.08)',
  padding: '2rem',
  marginBottom: '2rem',
  minHeight: '260px',
};

const iconStyle = { color: '#00B8D9', marginRight: '0.5rem', minWidth: 22 };

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_g3dq5mi';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_n7ihscy';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jXlF1KeTam_bfkqTO';

      if (!publicKey || !serviceId || !templateId) {
        const debug = {
          hasPublicKey: Boolean(publicKey),
          hasServiceId: Boolean(serviceId),
          hasTemplateId: Boolean(templateId)
        };
        console.error('EmailJS config missing (Contact):', debug);
        throw new Error('Missing EmailJS configuration after applying defaults.');
      }

      const templateParams = {
        name,
        email,
        message,
        title: 'Contact Us',
        from_name: name,
        reply_to: email,
        service_name: 'Contact Form',
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'umuhozacompanyltd@gmail.com',
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      if (res?.status !== 200) {
        throw new Error(`EmailJS failed with status ${res?.status}`);
      }
      setSuccess('Your message has been sent successfully. We will contact you soon.');
      setShowToast(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS error (Contact):', err);
      const msg = err?.text || err?.message || 'Failed to send your message. Please try again later.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* intro moved into hero overlay below */}

      <section id="contact" style={{ background: '#0A3D62', color: '#fff', padding: '0 0 2rem' }}>
        {/* Contact hero video (C.mp4) */}
        <div className="contact-hero-section">
          <div className="hero-video-section">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/images/C.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="hero-overlay" />
            <Container className="hero-content text-center py-5" style={{ maxWidth: 1000 }}>
              <h1 className="hero-title fw-bold">Contact Us</h1>
              <p className="hero-desc mb-0" style={{ color: '#f1f5f7' }}>
                At DTEC Software Solutions Ltd, we value every opportunity to connect with our clients, partners, and future collaborators. Whether you have questions about our services, need technical support, or want to discuss a potential project, our team is always ready to assist you. Reach out to us anytime.
              </p>
            </Container>
          </div>
        </div>
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card style={officeCardStyle} className="h-100 border-0 office-contact">
                <h5 className="fw-bold mb-3" style={{ color: '#0A3D62' }}>Rwanda Office</h5>
                <p className="mb-2"><FaMapMarkerAlt style={iconStyle} />Kubaho Plaza, KG 7 Ave, KIGALI</p>
                <p className="mb-2"><FaPhoneAlt style={iconStyle} /><a href="tel:+25078088777" className="text-decoration-none" style={{ color: '#0A3D62' }}>+25078088777</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Deepak@dtec.co.in" className="text-decoration-none" style={{ color: '#0A3D62' }}>Deepak@dtec.co.in</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Sales@dtec.rw" className="text-decoration-none" style={{ color: '#0A3D62' }}>Sales@dtec.rw</a></p>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card style={officeCardStyle} className="h-100 border-0 office-contact">
                <h5 className="fw-bold mb-3" style={{ color: '#0A3D62' }}>India Office</h5>
                <p className="mb-2"><FaMapMarkerAlt style={iconStyle} />Kurasseril Bunglavu, MahadeviKadu PO,<br />Karthikapally, Alappuzha, Kerala, INDIA.</p>
                <p className="mb-2"><FaPhoneAlt style={iconStyle} /><a href="tel:+918714731403" className="text-decoration-none" style={{ color: '#0A3D62' }}>+91 87 1473 1403</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Deepak@dtec.co.in" className="text-decoration-none" style={{ color: '#0A3D62' }}>Deepak@dtec.co.in</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Sales@dtec.rw" className="text-decoration-none" style={{ color: '#0A3D62' }}>Sales@dtec.rw</a></p>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card style={{ ...officeCardStyle, minHeight: 'auto', maxWidth: '100%', padding: '1rem' }} className="border-0 contact-form-card">
                <div className="text-center mb-3">
                  <h4 className="contact-form-title">Contact Us</h4>
                </div>
                {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="sm" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                  </Form.Group>
                  <Button variant="info" type="submit" className="text-white fw-bold px-3 py-1 send-btn" style={{ background: '#00B8D9' }} disabled={submitting}>
                    {submitting ? (<><Spinner size="sm" animation="border" className="me-2" />Sending...</>) : 'Send Message'}
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
          {/* Map section: white card with left text and right map */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="border-0 shadow-sm map-section-card" style={{ borderRadius: '1rem', background: '#fff' }}>
                <div className="row g-0 align-items-center">
                  <div className="col-lg-4 p-4 map-text-col">
                    <h3 className="map-title" style={{ color: '#0A3D62', fontWeight: 800 }}>Our Locations</h3>
                    <p className="map-desc text-muted" style={{ color: '#6c7b86' }}>We’d love to hear from you! Reach out at any time.</p>
                  </div>
                  <div className="col-lg-8 p-3 map-col">
                    <div className="map-embed-wrapper large-map">
                      <iframe
                        className="map-iframe"
                        title="DTEC Software Solutions Location"
                        src="https://www.google.com/maps?q=Kubaho+Plaza,+KG+7+Ave,+Kigali&z=16&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <ToastContainer position="bottom-center" className="p-3">
            <Toast onClose={() => { setShowToast(false); setSuccess(''); }} show={showToast} delay={2500} autohide bg="success">
              <Toast.Body className="text-white">{success || 'Message sent successfully.'}</Toast.Body>
            </Toast>
          </ToastContainer>
        </Container>
      </section>
    </>
  );
};

export default Contact;