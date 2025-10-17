
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
        // Match EmailJS template fields shown in your screenshot
        name,
        email,
        message,
        title: 'Contact Us',

        // Optional extras (safe if not used by template)
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
  <section id="contact" style={{ background: 'linear-gradient(90deg, #0A3D62 60%, #00B8D9 100%)', color: '#fff', padding: '2rem 0' }}>
    <Container>
      <Row className="g-4">
        <Col lg={6} className="mb-4 mb-lg-0">
          <Card style={{ ...officeCardStyle, minHeight: 'auto', maxWidth: '480px', padding: '1rem' }} className="border-0">
            <h2 className="fw-bold mb-4" style={{ color: '#0A3D62' }}>Contact Us</h2>
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
              <Button variant="info" type="submit" className="text-white fw-bold px-3 py-1" style={{ background: '#00B8D9' }} disabled={submitting}>
                {submitting ? (<><Spinner size="sm" animation="border" className="me-2" />Sending...</>) : 'Send Message'}
              </Button>
            </Form>
          </Card>
        </Col>
        <Col lg={6}>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card style={officeCardStyle} className="h-100 border-0 office-contact">
                <h5 className="fw-bold mb-3" style={{ color: '#0A3D62' }}>Rwanda Office</h5>
                <p className="mb-2"><FaMapMarkerAlt style={iconStyle} />Kubaho Plaza, KG 7 Ave, KIGALI</p>
                <p className="mb-2"><FaPhoneAlt style={iconStyle} /><a href="tel:+25078088777" className="text-decoration-none" style={{ color: '#0A3D62' }}>+25078088777</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Deepak@dtec.co.in" className="text-decoration-none" style={{ color: '#0A3D62' }}>Deepak@dtec.co.in</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Sales@dtec.rw" className="text-decoration-none" style={{ color: '#0A3D62' }}>Sales@dtec.rw</a></p>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card style={officeCardStyle} className="h-100 border-0 office-contact">
                <h5 className="fw-bold mb-3" style={{ color: '#0A3D62' }}>India Office</h5>
                <p className="mb-2"><FaMapMarkerAlt style={iconStyle} />Kurasseril Bunglavu, MahadeviKadu PO,<br />Karthikapally, Alappuzha, Kerala, INDIA.</p>
                <p className="mb-2"><FaPhoneAlt style={iconStyle} /><a href="tel:+918714731403" className="text-decoration-none" style={{ color: '#0A3D62' }}>+91 87 1473 1403</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Deepak@dtec.co.in" className="text-decoration-none" style={{ color: '#0A3D62' }}>Deepak@dtec.co.in</a></p>
                <p className="mb-2"><FaEnvelope style={iconStyle} /><a href="mailto:Sales@dtec.rw" className="text-decoration-none" style={{ color: '#0A3D62' }}>Sales@dtec.rw</a></p>
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '1rem' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem' }}>
                  <iframe
                    title="DTEC Software Solutions Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d-1!2d30.0587!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5b02af3e5f9%3A0x0000000000000000!2sKubaho%20Plaza%2C%20KG%207%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1700000000000"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-2 text-end">
                  <a href="https://www.google.com/maps?q=Kubaho+Plaza,+KG+7+Ave,+Kigali" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <ToastContainer position="bottom-center" className="p-3">
          <Toast onClose={() => { setShowToast(false); setSuccess(''); }} show={showToast} delay={2500} autohide bg="success">
            <Toast.Body className="text-white">{success || 'Message sent successfully.'}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Row>
    </Container>
  </section>
  );
};

export default Contact;
