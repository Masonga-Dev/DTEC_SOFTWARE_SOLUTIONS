import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ServiceRequestModal = ({ show, onHide, defaultService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setName('');
    setEmail('');
    setMessage('');
    onHide && onHide();
  };

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
        console.error('EmailJS config missing (ServiceRequestModal):', debug);
        throw new Error('Missing EmailJS configuration after applying defaults.');
      }

      const templateParams = {
        // Match EmailJS template fields shown in your screenshot
        name,
        email,
        message,
        title: defaultService || 'Service Request',

        // Optional extras (safe if not used by template)
        from_name: name,
        reply_to: email,
        service_name: defaultService || 'Service Request',
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'umuhozacompanyltd@gmail.com',
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      if (res?.status !== 200) {
        throw new Error(`EmailJS failed with status ${res?.status}`);
      }
      setSuccess('Your request has been sent successfully. We will contact you soon.');
      setShowToast(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const msg = err?.text || err?.message || 'Failed to send your request. Please try again in a moment.';
      setError(msg);
      console.error('EmailJS error (ServiceRequestModal):', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Request Service{defaultService ? `: ${defaultService}` : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
        {success && <Alert variant="success" className="mb-3">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="reqName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="reqEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="reqMsg">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your needs" />
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose} disabled={submitting}>Cancel</Button>
            <Button type="submit" variant="info" className="text-white" style={{ background: '#00B8D9' }} disabled={submitting}>
              {submitting ? (<><Spinner size="sm" animation="border" className="me-2" />Sending...</>) : 'Submit'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <ToastContainer position="bottom-center" className="p-3">
        <Toast onClose={() => { setShowToast(false); setSuccess(''); }} show={showToast} delay={2500} autohide bg="success">
          <Toast.Body className="text-white">{success || 'Request sent successfully.'}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Modal>
  );
};

export default ServiceRequestModal;


